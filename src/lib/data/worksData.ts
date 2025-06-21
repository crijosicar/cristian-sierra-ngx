import type { Project } from '$lib/shared/constants';

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
		category: ProjectsNav.SOFTWARE_ENGINEERING,
		description:
			'Cristian was instrumental in the creation of the admin platform for the Gran Retoma Intel project using Laravel. He expertly integrated the platform with a database and pushed the site to production, while also generating detailed reports. In addition, he showcased charts with the number of people trading their computers from old Intel processors to the latest generations of Intel silicon.'
	},
	{
		id: 2,
		image: '/assets/Plastilene_Solum_Digital_1.png',
		title: 'Grupo Plastilene - Solum Digital',
		category: ProjectsNav.WORDPRESS,
		description:
			'Creation of a compound of WordPress multisite, multi-domain, and multilingual, delivering a highly functional and user-friendly website. He gave the possibility for Plastilene Group to bring their websites to the new century by implementing an advanced UI interface. He also managed the migration process with ease and efficiency, bringing the site to the production stage in no time.'
	},
	{
		id: 3,
		image: '/assets/Site_Migration_LabOneGroup_1.png',
		title: 'LatOne Group - Site Migration',
		category: ProjectsNav.WEB_DEVELOPMENT,
		description:
			'Cristian migrated our website from Bluehost to GoDaddy with ease and efficiency, ensuring that everything was properly set up and functioning optimally. With that, the new Latone Group was capable to stay up to date with a more capable server and user capable infrastructure.'
	}
];
