import { defineConfig } from 'vitest/config';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';

// Test configuration using the same Vite plugins setup as the app
export default defineConfig({
	plugins: [
		sveltekit(),
		devtoolsJson(),
		svelteTesting()
	],
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true
	}
});
