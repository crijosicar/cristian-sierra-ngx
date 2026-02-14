import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { ADMIN_TOKEN } from '$env/static/private';

export const prerender = false;

export const load: PageServerLoad = async ({ url, cookies }) => {
	const authToken = url.searchParams.get('token');
	const cookieAdminToken = cookies.get('admin_token');

	if (authToken === ADMIN_TOKEN) {
		cookies.set('admin_token', authToken, {
			path: '/admin',
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		return {
			authenticated: true
		};
	} else if (cookieAdminToken === ADMIN_TOKEN) {
		return {
			authenticated: true
		};
	}

	throw redirect(302, '/');
};
