import type { Handle, ServerInit } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { getTextDirection } from '$lib/paraglide/runtime';

export const init: ServerInit = async () => {
	console.info('Server created, registering shutdown hooks');
	process.on('sveltekit:shutdown', async (reason) => {
		console.warn('SvelteKit has shutdown because of', reason);
	});
};

const paraglideHandle: Handle = ({ event, resolve }) => {
	return paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace('%lang%', locale).replace('%dir%', getTextDirection(locale))
		});
	});
};

export const handle: Handle = sequence(paraglideHandle);
