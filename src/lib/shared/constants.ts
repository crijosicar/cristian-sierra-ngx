export type Project = {
	id: number;
	image: string;
	title: string;
	category: string;
	description: string;
};

export type Testimonial = Omit<Project, 'category'> & { description: string };

export const CONTACT_EMAIL_QUEUE_NAME = 'GET_IN_TOUCH_QUEUE';
