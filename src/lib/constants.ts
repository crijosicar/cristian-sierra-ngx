export type Project = {
	id: number;
	image: string;
	title: string;
	category: string;
};

export type ProjectFilters = {
	name: string;
};

export type Testimonial = Omit<Project, 'category'> & { description: string };
