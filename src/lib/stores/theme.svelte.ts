import { browser } from '$app/environment';

class ThemeStore {
	isDark = $state(false);

	constructor() {
		if (browser) {
			const stored = localStorage.getItem('theme');
			if (stored) {
				this.isDark = stored === 'dark';
			} else {
				// Respect system preference on first visit
				this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			}
			this.applyTheme();
		}
	}

	toggle() {
		this.isDark = !this.isDark;
		this.applyTheme();
		if (browser) {
			localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
		}
	}

	private applyTheme() {
		if (browser) {
			const html = document.documentElement;
			if (this.isDark) {
				html.classList.add('dark-theme');
			} else {
				html.classList.remove('dark-theme');
			}
			// Update meta theme-color for mobile browsers
			const meta = document.querySelector('meta[name="theme-color"]');
			if (meta) {
				meta.setAttribute('content', this.isDark ? '#1a1a2e' : '#ffffff');
			}
		}
	}
}

export const theme = new ThemeStore();
