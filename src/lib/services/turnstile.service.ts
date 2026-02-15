import { TURNSTILE_SECRET_KEY } from '$env/static/private';

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

export const validateToken = async (token: string) => {
	const body = JSON.stringify({
		response: token,
		secret: TURNSTILE_SECRET_KEY
	});
	const headers = {
		'Content-Type': 'application/json'
	};

	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers,
		body
	});

	const { success, 'error-codes': errorCodes }: TokenValidateResponse = await response.json();

	return {
		success,
		error: errorCodes?.length ? errorCodes[0] : null
	};
};
