import { redisConnection } from '$lib/database';
import { CONTACT_EMAIL_QUEUE_NAME } from '$lib/shared/constants';
import { type Job, Queue } from 'bullmq';

const queueConfig = {
	removeOnComplete: false,
	connection: redisConnection,
	defaultJobOptions: {
		attempts: 1,
		backoff: {
			type: 'exponential',
			delay: 5000
		}
	}
};

export const mailerQueue = new Queue(CONTACT_EMAIL_QUEUE_NAME, queueConfig);

mailerQueue.on('waiting', (job: Job) =>
	console.log(
		`[QUEUE] mailerQueue Job with ID "${job.id}" waiting and schedules to run at ${new Date(job.data.runDate).toLocaleString()}`
	)
);

mailerQueue.on('progress', (job: Job, progress: number | object) =>
	console.log(
		`[QUEUE] mailerQueue Job with ID "${job.id}" progress: ${JSON.stringify(progress, Object.getOwnPropertyNames(progress))}`
	)
);

mailerQueue.on('error', (err: Error) =>
	console.error(
		`[QUEUE] mailerQueue Job failed with reason: ${JSON.stringify(err, Object.getOwnPropertyNames(err))}`
	)
);
