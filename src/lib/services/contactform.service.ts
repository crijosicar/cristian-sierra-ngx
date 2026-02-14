import { N8N_API_URL, N8N_API_USER, N8N_API_PASSWORD } from '$env/static/private';

export const postContactForm = async (
	name: string,
	email: string,
	project: string
): Promise<any> => {
	const response = await fetch(N8N_API_URL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Authorization: `Basic ${Buffer.from(`${N8N_API_USER}:${N8N_API_PASSWORD}`).toString('base64')}`
		},
		body: JSON.stringify({
			name,
			email,
			project
		})
	});

	if (!response.ok) {
		throw new Error(`Failed to post contact form with status: ${await response.text()}`);
	}

	const contactform = await response.json();
	return contactform;
};