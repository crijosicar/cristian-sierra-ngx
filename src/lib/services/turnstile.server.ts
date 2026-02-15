import { TURNSTILE_SECRET_KEY } from '$env/static/private';

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

export const validateToken = async (token: string, ip: string) => {
	const formData = new FormData();
	formData.append('secret', TURNSTILE_SECRET_KEY);
	formData.append('response', token);
	formData.append('remoteip', ip);

	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		body: formData
	});

	const { success, 'error-codes': errorCodes }: TokenValidateResponse = await response
		.json()
		.catch(() => ({ success: false, 'error-codes': ['internal-error'] }));

	return {
		success,
		error: errorCodes?.length ? errorCodes[0] : null
	};
};
