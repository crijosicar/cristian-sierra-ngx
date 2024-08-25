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
		image: '/assets/GranRetoma_LatOneGroup_1.png',
		title: 'La Gran Retoma Intel - LatOne Group',
		category: ProjectsNav.SOFTWARE_ENGINEERING
	},
	{
		id: 2,
		image: '/assets/Plastilene_Solum_Digital_1.png',
		title: 'Grupo Plastilene - Solum Digital',
		category: ProjectsNav.WORDPRESS
	},
	{
		id: 3,
		image: '/assets/Site_Migration_LabOneGroup_1.png',
		title: 'LatOne Group - Site Migration',
		category: ProjectsNav.WEB_DEVELOPMENT
	}
];
