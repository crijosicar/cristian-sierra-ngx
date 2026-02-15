import z from 'zod';

export type CreateContactFormDTO = z.infer<typeof createContactValidationSchema>;

export const createContactValidationSchema = z.object({
	name: z.string().trim().min(2),
	email: z.email(),
	project: z.string().min(10),
	'cf-turnstile-response': z.string().nonempty('Please complete turnstile')
});
