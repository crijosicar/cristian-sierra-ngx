import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	cookies.delete('admin_token', { path: '/admin' });

	throw redirect(302, '/');
};
