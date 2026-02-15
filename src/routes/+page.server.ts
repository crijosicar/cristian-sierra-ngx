import { message, superValidate, setError } from 'sveltekit-superforms';
import { zod4 as zodAdapter } from 'sveltekit-superforms/adapters';
import {
	createContactValidationSchema,
	type CreateContactFormDTO
} from '$lib/shared/createContactValidationSchema';
import { fail } from '@sveltejs/kit';
import { validateToken } from '$lib/services/turnstile.server';
import { postContactForm } from '$lib/services/contactform.server';

export const prerender = false;

export const load = async () => {
	const form = await superValidate(zodAdapter(createContactValidationSchema));

	return { form };
};

export const actions = {
	create: async ({ request }: { request: Request }) => {
		const form = await superValidate<CreateContactFormDTO>(
			request,
			zodAdapter(createContactValidationSchema)
		);

		const ip =
			request.headers.get('CF-Connecting-IP') ||
			request.headers.get('X-Forwarded-For') ||
			'unknown';

		if (!form.valid) {
			return fail(400, { form });
		}

		const token = form.data['cf-turnstile-response'];

		const { success, error } = await validateToken(token, ip);

		if (!success) {
			return setError(form, 'cf-turnstile-response', error || 'Form validation failed');
		}

		const { name, email, project } = form.data ?? {};

		await postContactForm(name, email, project);

		console.log('[create] actions.create - Your message has been sent successfully!');

		return message(form, 'Your message has been sent successfully!');
	}
};
