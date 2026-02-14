interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

export const validateToken = async (token: string, secret: string) => {
	const body = new URLSearchParams({
		response: token,
		secret
	});
	const headers = {
		'content-type': 'application/x-www-form-urlencoded'
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
