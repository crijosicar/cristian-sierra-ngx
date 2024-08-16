<script lang="ts">
	import { onMount } from 'svelte';
	import WorkItems from './WorkItems.svelte';
	import { projectsData, projectsNav } from '$lib/worksData';
	import type { Project } from '$lib/constants';

	let item = { name: 'all' };
	let projects: Project[] = [];
	let active = 0;

	onMount(() => {
		updateProjects();
	});

	function updateProjects() {
		if (item.name === 'all') {
			projects = projectsData;
		} else {
			projects = projectsData.filter((project) => project.category.toLowerCase() === item.name);
		}
	}

	function handleClick(e: Event, index: number) {
		item = { name: e?.target?.textContent.toLowerCase() };
		active = index;
		updateProjects();
	}
</script>

<div>
	<div class="work__filters">
		{#each projectsNav as navItem, index}
      <span
				on:click={(e) => handleClick(e, index)}
				class:active-work={active === index}
				class="work__item"
			>
        {navItem.name}
      </span>
		{/each}
	</div>

	<div class="work__container container grid">
		{#each projects as project (project.id)}
			<WorkItems {project} />
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