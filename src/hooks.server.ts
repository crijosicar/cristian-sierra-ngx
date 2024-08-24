import { mailerWorker } from '$lib/contactWorker';

process.on('exit', () => {
	console.log('Exiting process...');
	mailerWorker.close();
});
