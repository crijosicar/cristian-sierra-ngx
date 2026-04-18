import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

export default defineConfig({
	plugins: [
		sveltekit(),
		devtoolsJson(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['cookie', 'baseLocale']
		})
	],
	server: {
		hmr: { overlay: false },
		allowedHosts: [
			'localhost',
			...(process.env.VITE_ALLOWED_HOST ? [process.env.VITE_ALLOWED_HOST] : [])
		]
	}
});
