import { contactWorker } from '$lib/workers/contactWorker';

process.on('exit', () => {
	console.log('Exiting process...');
	contactWorker.close();
});
