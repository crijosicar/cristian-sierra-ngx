import '@testing-library/jest-dom';
import { vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	}))
});

// Mock Web Haptics which relies on window/navigator APIs out of jsdom's scope
vi.mock('web-haptics/svelte', () => ({
	createWebHaptics: () => ({
		trigger: vi.fn(),
		destroy: vi.fn()
	})
}));

// Mock Turnstile to avoid external scripts
vi.mock('svelte-turnstile', () => ({
	Turnstile: function MockTurnstile() { return null; }
}));

// Mock Paraglide Messages to render keys and run properly without full setup
vi.mock('$lib/paraglide/messages', () => ({
	contact_title: () => 'Contact Title',
	contact_subtitle: () => 'Contact Subtitle',
	contact_say_hello_title: () => 'Say Hello',
	contact_email_title: () => 'Email Title',
	contact_email_btn: () => 'Email Btn',
	contact_whatsapp_title: () => 'Whatsapp',
	contact_whatsapp_btn: () => 'Whatsapp Btn',
	contact_project_title: () => 'Project Title',
	contact_form_name_label: () => 'Name',
	contact_form_name_placeholder: () => 'Enter your name',
	contact_form_email_label: () => 'Email',
	contact_form_email_placeholder: () => 'Enter your email',
	contact_form_project_label: () => 'Project',
	contact_form_project_placeholder: () => 'Enter your project details',
	contact_form_send: () => 'Send',
	contact_toast_success: () => 'Success',
	contact_toast_error: () => 'Error'
}));
