export type Project = {
	id: number;
	image: string;
	title: string;
	category: string;
};

export type Testimonial = Omit<Project, 'category'> & { description: string };

export const CONTACT_EMAIL_QUEUE_NAME = 'CONTACT_EMAIL_QUEUE_NAME';

export const CONTACT_EMAIL_QUEUE_SIZE = 99;
