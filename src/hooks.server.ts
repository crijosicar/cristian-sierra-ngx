import { contactWorker } from '$lib/workers/contactWorker';

process.on('sveltekit:shutdown', async (reason) => {
  	console.log(`Exiting process... with reason ${JSON.stringify(reason, Object.getOwnPropertyNames(reason))}`);
	contactWorker.close();
});
