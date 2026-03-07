import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		hmr: {
			overlay: false
		},
		allowedHosts: ['localhost', 'hitting-defined-maintenance-hawaiian.trycloudflare.com']
	}
});
