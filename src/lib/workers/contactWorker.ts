import { type Job, Worker } from 'bullmq';
import { redisConnection } from '$lib/database';
import { CONTACT_EMAIL_QUEUE_NAME } from '$lib/shared/constants';
import {
	EMAILJS_PUBLIC_KEY,
	EMAILJS_PRIVATE_KEY,
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID,
	EMAILJS_URL_API
} from '$env/static/private';

export const contactWorker = new Worker(
	CONTACT_EMAIL_QUEUE_NAME,
	async (job: Job) => {
		const data: string = JSON.stringify({
			service_id: EMAILJS_SERVICE_ID,
			template_id: EMAILJS_TEMPLATE_ID,
			user_id: EMAILJS_PUBLIC_KEY,
			accessToken: EMAILJS_PRIVATE_KEY,
			template_params: {
				from_name: `${job.data.name} (${job.data.email})`,
				to_name: 'Sierra Team',
				message: job.data.project,
				reply_to: job.data.email,
				request_date: new Date(job.data.requestDate).toLocaleString()
			}
		});
		const headers: HeadersInit = {
			'Content-Type': 'application/json'
		};

		try {
			const response = await fetch(`${EMAILJS_URL_API}/email/send`, {
				method: 'POST',
				headers,
				body: data
			});

			if (!response.ok) {
				throw new Error(
					`[WORKER] contactWorker Job with ID "${job.id}" failed with reason: ${await response.text()}`
				);
			}

			console.log(
				`[WORKER] contactWorker Job with ID "${job.id}" completed on ${new Date().toLocaleString()}`
			);
		} catch (error) {
			console.error(
				`[WORKER] contactWorker Job with ID "${job.id}" failed with reason: ${JSON.stringify(error, Object.getOwnPropertyNames(error))}`
			);
		}
	},
	{
		connection: redisConnection,
		concurrency: 1
	}
);
