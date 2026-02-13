import { message, superValidate, setError } from 'sveltekit-superforms';
import { zod4 as zodAdapter } from 'sveltekit-superforms/adapters';
import { createContactValidationSchema } from '$lib/shared/createContactValidationSchema';
import { fail } from '@sveltejs/kit';
import { mailerQueue } from '$lib/queues/mailerQueue';
import { CONTACT_EMAIL_QUEUE_NAME } from '$lib/shared/constants';
import { validateToken } from '$lib/services/turnstile.service';
import { EMAILJS_QUEUE_SIZE, TURNSTILE_SECRET_KEY } from '$env/static/private';
import { dev } from '$app/environment';
import type { Job } from 'bullmq';

export const prerender = false;

export const load = async () => {
	const form = await superValidate(zodAdapter(createContactValidationSchema));

	return { form };
};

const isSameDay = (inputDate: Date, date: Date): boolean => {
	const inputDateCopy = new Date(inputDate);
	const dateCopy = new Date(date);
	return inputDateCopy.setHours(0, 0, 0, 0) == dateCopy.setHours(0, 0, 0, 0);
};

const getJobsRunningByDate = async (date: Date): Promise<Job[]> => {
	const currentJobs = await mailerQueue.getJobs();

	return currentJobs.filter((job: Job) => isSameDay(new Date(job.data.runDate), date));
};

// Recursive function to find the next available date
// depending on the current jobs running on a day
const findNextAvailableDate = async (checkDate: Date): Promise<number> => {
	const jobsRunningNextDay = await getJobsRunningByDate(checkDate);

	if (jobsRunningNextDay.length < parseInt(EMAILJS_QUEUE_SIZE, 10)) {
		const lastJob = [...jobsRunningNextDay].pop();

		// Gap of 5 seconds execution between jobs
		return (lastJob?.data.runDate || checkDate.getTime()) + 5000;
	}

	const nextDay = new Date(checkDate);
	nextDay.setDate(nextDay.getDate() + 1);

	return findNextAvailableDate(nextDay);
};

const getJobDelayByAvailability = async (): Promise<number> => {
	const todaysDate = new Date();

	const jobsRunningToday = await getJobsRunningByDate(todaysDate);

	if (jobsRunningToday.length < parseInt(EMAILJS_QUEUE_SIZE, 10)) {
		// Gap of 5 seconds execution between jobs
		return todaysDate.getTime() + 5000;
	}

	const nextDay = todaysDate;
	nextDay.setDate(nextDay.getDate() + 1);

	return findNextAvailableDate(nextDay);
};

export const actions = {
	create: async ({ request }) => {
		const form = await superValidate(request, zodAdapter(createContactValidationSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const { 'cf-turnstile-response': token } = form.data as { 'cf-turnstile-response': string };

		const { success, error } = await validateToken(token, TURNSTILE_SECRET_KEY);

		if (!success) {
			return setError(form, 'cf-turnstile-response', error || 'Form validation failed');
		}

		if (dev) {
			// In development, do not sent the email, just return a success message
			console.log(
				'[create] actions.create - Your message has been sent successfully! (Development mode)'
			);
			return message(form, 'Your message has been sent successfully! (Development mode)');
		}

		const runDate = await getJobDelayByAvailability();

		await mailerQueue.add(
			CONTACT_EMAIL_QUEUE_NAME,
			{ ...form.data, runDate, requestDate: new Date() },
			{ delay: runDate - Date.now() }
		);

		console.log('[create] actions.create - Your message has been sent successfully!');
		// Display a success status message
		return message(form, 'Your message has been sent successfully!');
	}
};
