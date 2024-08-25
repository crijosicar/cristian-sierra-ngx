<script lang="ts">
	import { onMount } from 'svelte';
	import WorkItems from './WorkItems.svelte';
	import { projectsData, ProjectsNav } from '$lib/worksData';
	import type { Project } from '$lib/constants';

	const navItems = Object.values(ProjectsNav);

	let item = { name: ProjectsNav.ALL };
	let projects: Project[] = [];
	let active = 0;

	onMount(() => {
		updateProjects();
	});

	const updateProjects = () => {
		projects = item.name === ProjectsNav.ALL
			? projectsData
			: projectsData.filter(({ category }) => category.toLowerCase() === item.name);
	};

	const handleClick = (e: unknown, index: number) => {
		item = { name: e?.target?.innerHTML.trim().toLowerCase() };
		active = index;
		updateProjects();
	};

	const handleMessage = (e: CustomEvent) => {
		console.log(e.detail);
	};
</script>

<div>
	<div class="work__filters">
		{#each navItems as navItem, index}
			<span
				on:click={(e) => handleClick(e, index)}
				class:active-work={active === index}
				class="work__item"
			>
				{navItem}
			</span>
		{/each}
	</div>

	<div class="work__container container grid">
		{#each projects as project (project.id)}
			<WorkItems {project} on:message={handleMessage} />
		{/each}
	</div>
</div>

<style>
    .work__container {
        gap: 3rem;
        grid-template-columns: repeat(2, max-content);
        justify-content: center;
    }

    .work__filters {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 0.75rem;
        margin-bottom: var(--mb-2);
    }

    .work__item {
        cursor: pointer;
        color: var(--title-color);
        padding: 0.25rem 0.75rem;
        font-weight: var(--font-medium);
        border-radius: 0.5rem;
        text-transform: capitalize;
    }

    .work__item:hover {
        background-color: var(--title-color);
        color: var(--container-color);
    }

    /* Active Item Work */
    .active-work {
        background-color: var(--title-color);
        color: var(--container-color);
    }

    /*==================== MEDIA QUERIES ====================*/
    /* For large devices */
    @media screen and (max-width: 992px) {
        .work__container {
            gap: 1.25rem;
        }
    }

    /* For medium devices */
    @media screen and (max-width: 768px) {
        .work__container {
            grid-template-columns: max-content;
        }
    }

    @media screen and (max-width: 576px) {
        .work__container {
            grid-template-columns: 1fr;
        }
    }

    /* For small devices */
    @media screen and (max-width: 350px) {
        .work__item {
            font-size: var(--small-font-size);
        }

        .work__filters {
            column-gap: 0.25rem;
        }
    }
</style>
