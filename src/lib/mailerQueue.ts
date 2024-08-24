import { redisConnection } from '$lib/database';
import { type Job, Queue } from 'bullmq';
import { CONTACT_EMAIL_QUEUE_NAME } from '$lib/constants';

const queueConfig = {
	removeOnComplete: false,
	connection: redisConnection
};

export const mailerQueue = new Queue(CONTACT_EMAIL_QUEUE_NAME, queueConfig);

mailerQueue.on('waiting', (job: Job) => {
	console.log(
		`[QUEUE] mailerQueue Job with ID "${job.id}" added to process on ${new Date(job.data.runDate).toLocaleString()}`
	);
});
