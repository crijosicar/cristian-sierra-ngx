import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: true,
			strict: true
		}),
		prerender: {
			entries: ['*']
		},
		csp: {
			directives: {
				'script-src': ['self', 'https://challenges.cloudflare.com'],
				'frame-src': ['self', 'https://challenges.cloudflare.com']
			}
		}
	}
};

export default config;
