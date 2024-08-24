import { message, superValidate } from 'sveltekit-superforms';
import { zod as zodAdapter } from 'sveltekit-superforms/adapters';
import { createContactValidationSchema } from '$lib/createContactValidationSchema';
import { fail } from '@sveltejs/kit';
import { mailerQueue } from '$lib/mailerQueue';
import { CONTACT_EMAIL_QUEUE_NAME, CONTACT_EMAIL_QUEUE_SIZE } from '$lib/constants';
import type { Job } from 'bullmq';

export const load = async () => {
	const form = await superValidate(zodAdapter(createContactValidationSchema));

	return { form };
};

const isSameDay = (inputDate: Date, date: Date): boolean => {
	return inputDate.setHours(0, 0, 0, 0) == date.setHours(0, 0, 0, 0);
};

const getJobsRunningByDate = async (date: Date): Promise<Job[]> => {
	const currentJobs = await mailerQueue.getJobs();

	return currentJobs.filter((job) => isSameDay(new Date(job.data.runDate), date));
};

// Recursive function to find the next available date
// depending on the current jobs running on a day
const findNextAvailableDate = async (checkDate: Date): Promise<number> => {
	const jobsRunningNextDay = await getJobsRunningByDate(checkDate);

	if (jobsRunningNextDay.length < CONTACT_EMAIL_QUEUE_SIZE) {
		const lastJob = [...jobsRunningNextDay].pop();

		return (lastJob?.data.runDate || checkDate.getTime()) + 1000;
	}

	const nextDay = new Date(checkDate);
	nextDay.setDate(nextDay.getDate() + 1);

	return findNextAvailableDate(nextDay);
};

const getJobDelayByAvailability = async (): Promise<number> => {
	const todaysDate = new Date();

	const jobsRunningToday = await getJobsRunningByDate(todaysDate);

	if (jobsRunningToday.length < CONTACT_EMAIL_QUEUE_SIZE) {
		return todaysDate.getTime();
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

		const runDate = await getJobDelayByAvailability();

		await mailerQueue.add(CONTACT_EMAIL_QUEUE_NAME, { ...form.data, runDate }, { delay: runDate });

		// Display a success status message
		return message(form, 'Your message has been sent successfully!');
	}
};
