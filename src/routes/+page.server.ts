import { message, superValidate, setError } from 'sveltekit-superforms';
import { zod4 as zodAdapter } from 'sveltekit-superforms/adapters';
import { createContactValidationSchema } from '$lib/shared/createContactValidationSchema';
import { fail } from '@sveltejs/kit';
import { validateToken } from '$lib/services/turnstile.service';
import { TURNSTILE_SECRET_KEY } from '$env/static/private';
import { dev } from '$app/environment';

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

		if (dev) {
			// In development, do not sent the email, just return a success message
			console.log(
				'[create] actions.create - Your message has been sent successfully! (Development mode)'
			);
			return message(form, 'Your message has been sent successfully! (Development mode)');
		}

		console.log(form.data);

		console.log('[create] actions.create - Your message has been sent successfully!');

		// Display a success status message
		return message(form, 'Your message has been sent successfully!');
	}
};
