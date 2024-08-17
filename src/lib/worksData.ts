import type { Project } from '$lib/constants';

// projects
export enum ProjectsNav {
	ALL = 'all',
	WEB = 'web',
	APP = 'app',
	DESIGN = 'design'
}

export const projectsData: Project[] = [
	{
		id: 1,
		image: '/assets/work1.jpg',
		title: 'Web design',
		category: ProjectsNav.WEB
	},
	{
		id: 2,
		image: '/assets/work2.jpg',
		title: 'App movil',
		category: ProjectsNav.APP
	},
	{
		id: 3,
		image: '/assets/work3.jpg',
		title: 'Brand design',
		category: ProjectsNav.DESIGN
	},
	{
		id: 4,
		image: '/assets/work4.jpg',
		title: 'App movil',
		category: ProjectsNav.APP
	},
	{
		id: 5,
		image: '/assets/work5.jpg',
		title: 'Web design',
		category: ProjectsNav.WEB
	}
];
