import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Contact from './Contact.svelte';
import { vi } from 'vitest';

// Mocks the superForm dependencies
vi.mock('sveltekit-superforms', () => ({
	superForm: () => ({
		form: {
			subscribe: (fn: any) => {
				fn({ name: '', email: '', project: '' });
				return () => {};
			}
		},
		errors: {
			subscribe: (fn: any) => {
				fn({});
				return () => {};
			}
		},
		constraints: {
			subscribe: (fn: any) => {
				fn({});
				return () => {};
			}
		},
		submitting: {
			subscribe: (fn: any) => {
				fn(false);
				return () => {};
			}
		},
		enhance: (node: any) => ({ destroy: () => {} })
	})
}));

describe('Contact Form Component', () => {
	it('should render the form with all fields', () => {
		render(Contact, {
			props: {
				data: { form: {} }
			}
		});

		// Check section title
		expect(screen.getByText('Contact Title')).toBeTruthy();

		// Check input labels / fields (mocked by Paraglide)
		expect(screen.getByLabelText('Name')).toBeTruthy();
		expect(screen.getByLabelText('Email')).toBeTruthy();
		expect(screen.getByLabelText('Project')).toBeTruthy();

		// Check submit button
		expect(screen.getByRole('button', { name: /Send/i })).toBeTruthy();
	});

	it('should render contact information cards', () => {
		render(Contact, {
			props: {
				data: { form: {} }
			}
		});

		expect(screen.getByText('hello@cristiansierra.dev')).toBeTruthy();
		expect(screen.getByText('+1 548-255-1056')).toBeTruthy();
	});
});
