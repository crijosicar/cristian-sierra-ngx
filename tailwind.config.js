/** @type {import('tailwindcss').Config} */
export default {
	prefix: 'tw-',
	darkMode: ['class', '.dark-theme'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				warning: '#facc15',
				info: '#3b82f6',
				success: '#4ade80',
				error: '#ef4444'
			}
		}
	},
	plugins: []
};
