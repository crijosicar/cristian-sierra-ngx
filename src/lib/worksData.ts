import type { Project } from '$lib/constants';

// projects
export enum ProjectsNav {
	ALL = 'all',
	SOFTWARE_ENGINEERING = 'Software Engineering',
	WEB_DEVELOPMENT = 'Web Development',
	WORDPRESS = 'Wordpress'
}

export const projectsData: Project[] = [
	{
		id: 1,
		image: '/assets/work1.jpg',
		title: 'Application Development',
		category: ProjectsNav.SOFTWARE_ENGINEERING
	},
	{
		id: 2,
		image: '/assets/work2.jpg',
		title: 'Web Development',
		category: ProjectsNav.WEB_DEVELOPMENT
	},
	{
		id: 3,
		image: '/assets/work3.jpg',
		title: 'Wordpress Development',
		category: ProjectsNav.WORDPRESS
	},
	{
		id: 4,
		image: '/assets/work4.jpg',
		title: 'Application Development',
		category: ProjectsNav.SOFTWARE_ENGINEERING
	},
	{
		id: 5,
		image: '/assets/work5.jpg',
		title: 'Web Development',
		category: ProjectsNav.WEB_DEVELOPMENT
	}
];
