import type { Project, ProjectFilters } from '$lib/constants';

export const projectsData: Project[] = [
	{
		id: 1,
		image: '/assets/work1.jpg',
		title: 'Web design',
		category: 'web'
	},
	{
		id: 2,
		image: '/assets/work2.jpg',
		title: 'App movil',
		category: 'app'
	},
	{
		id: 3,
		image: '/assets/work3.jpg',
		title: 'Brand design',
		category: 'design'
	},
	{
		id: 4,
		image: '/assets/work4.jpg',
		title: 'App movil',
		category: 'app'
	},
	{
		id: 5,
		image: '/assets/work5.jpg',
		title: 'Web design',
		category: 'web'
	}
];

// projects
export const projectsNav: ProjectFilters[] = [
	{
		name: 'all'
	},
	{
		name: 'web'
	},
	{
		name: 'app'
	},
	{
		name: 'design'
	}
];
