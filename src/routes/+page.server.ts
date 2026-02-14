import { message, superValidate, setError } from 'sveltekit-superforms';
import { zod4 as zodAdapter } from 'sveltekit-superforms/adapters';
import { createContactValidationSchema } from '$lib/shared/createContactValidationSchema';
import { fail } from '@sveltejs/kit';
import { validateToken } from '$lib/services/turnstile.service';
import { TURNSTILE_SECRET_KEY } from '$env/static/private';
import { postContactForm } from '$lib/services/contactform.service';

export const prerender = false;

export const load = async () => {
	const form = await superValidate(zodAdapter(createContactValidationSchema));

	return { form };
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

		const { name, email, project } = form.data ?? {};

		await postContactForm(name, email, project);

		console.log('[create] actions.create - Your message has been sent successfully!');

		// Display a success status message
		return message(form, 'Your message has been sent successfully!');
	}
};
