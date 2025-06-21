import Redis from 'ioredis';
import { REDIS_HOST, REDIS_PORT } from '$env/static/private';

export const redisConnection = new Redis(parseInt(REDIS_PORT, 10), REDIS_HOST, {
	maxRetriesPerRequest: null,
	retryStrategy: (times: number) => {
		console.log(`[REDIS] Retrying connection... (${times})`);
		return 1000;
	}
});
