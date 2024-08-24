import { API_TOKEN } from '$env/static/private';
import { mailerQueue } from '$lib/mailerQueue';
import { json, text } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const token = url.searchParams.get('token');

	if (!token || token !== API_TOKEN) {
		return text('Not found', { status: 404 });
	}

	const currentJobs = await mailerQueue.getJobs();

	return json({ currentJobs });
}

// This handler will respond to PUT, PATCH, DELETE, etc.
/** @type {import('./$types').RequestHandler} */
export async function fallback({ request }) {
	return text(`I caught your ${request.method} request!`);
}
