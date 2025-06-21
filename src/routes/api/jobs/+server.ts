import { API_TOKEN } from '$env/static/private';
import { mailerQueue } from '$lib/queues/mailerQueue';
import { json, text } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const token = url.searchParams.get('token');
	const start = url.searchParams.get('start');
	const end = url.searchParams.get('end');

	if (!token || token !== API_TOKEN) {
		return text('Not found', { status: 404 });
	}

	const options = {
		start: parseInt(start || '0', 10),
		end: parseInt(end || '10', 10),
		asc: true,
		types: []
	};

	const currentJobs = await mailerQueue.getJobs(options.types, options.start, options.end, options.asc);

	return json({ currentJobs });
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ url }) {
	const token = url.searchParams.get('token');

	if (!token || token !== API_TOKEN) {
		return text('Not found', { status: 404 });
	}

	await mailerQueue.obliterate({force: true});

	return json({ message: "All jobs have been deleted successfully!" });
}

// This handler will respond to PUT, PATCH, DELETE, etc.
/** @type {import('./$types').RequestHandler} */
export async function fallback({ request }) {
	return text(`I caught your ${request.method} request!`);
}
