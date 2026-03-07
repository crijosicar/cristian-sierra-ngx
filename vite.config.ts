import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		hmr: {
			overlay: false
		},
		allowedHosts: ['localhost', ...(process.env.VITE_ALLOWED_HOST ? [process.env.VITE_ALLOWED_HOST] : [])]
	}
});
