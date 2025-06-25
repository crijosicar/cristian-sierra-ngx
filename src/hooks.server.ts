import { contactWorker } from '$lib/workers/contactWorker';

process.on('exit', () => {
	console.log('Exiting process...');
	contactWorker.close();
});


// /** @type {import('@sveltejs/kit').[Handle](https://kit.svelte.dev/docs/types#public-types-handle)} */
// export async function handle({ event, resolve }) {
//   // true when the request is for a `__data.json` endpoint
//   // https://kit.svelte.dev/docs/types#public-types-requestevent
//   if (event.isDataRequest) {
//     return new Response(null, { status: 200 });
//   }

//   const response = await resolve(event);
//   return response;
// }
