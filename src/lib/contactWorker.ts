import { Job, Worker } from 'bullmq';
import { redisConnection } from '$lib/database';
import { CONTACT_EMAIL_QUEUE_NAME } from '$lib/constants';
import {
	EMAILJS_PUBLIC_KEY,
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID,
	EMAILJS_URL_API
} from '$env/static/private';

export const mailerWorker = new Worker(
	CONTACT_EMAIL_QUEUE_NAME,
	async (job: Job) => {
		const payload = {
			from_name: `${job.data.name} (${job.data.email})`,
			to_name: 'Cristian Sierra',
			message: job.data.project,
			reply_to: job.data.email
		};

		await fetch(`${EMAILJS_URL_API}email/send`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				service_id: EMAILJS_SERVICE_ID,
				template_id: EMAILJS_TEMPLATE_ID,
				user_id: EMAILJS_PUBLIC_KEY,
				template_params: payload
			})
		});
	},
	{
		connection: redisConnection,
		concurrency: 1
	}
);
