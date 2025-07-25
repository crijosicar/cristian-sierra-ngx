import z from 'zod';

export const createContactValidationSchema = z.object({
	name: z.string().trim().min(2),
	email: z.string().email(),
	project: z.string().min(10),
	'cf-turnstile-response': z.string().nonempty('Please complete turnstile')
});
