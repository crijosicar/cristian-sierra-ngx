<script lang="ts">
	import { onMount } from 'svelte';
	import WorkItems from './WorkItems.svelte';
	import { projectsData, ProjectsNav } from '$lib/data/worksData';
	import type { Project } from '$lib/shared/constants';

	const navItems = Object.values(ProjectsNav);

	let item = $state({ name: ProjectsNav.ALL });
	let projects: Project[] = $state([]);
	let active = $state(0);
	let showDetails = $state(false);
	let currentProject: Project | undefined = $state(undefined);

	onMount(() => {
		updateProjects();
	});

	const updateProjects = () => {
		projects =
			item.name === ProjectsNav.ALL
				? projectsData
				: projectsData.filter(({ category }) => category.toLowerCase() === item.name);
	};

	const handleClick = (e: MouseEvent, index: number) => {
		item = { name: (e.target as HTMLElement)?.innerHTML.trim().toLowerCase() as ProjectsNav };
		active = index;
		updateProjects();
	};

	const handleMessage = (project: Project) => {
		currentProject = project;
		showDetails = true;
	};
</script>

<div>
	<div class="work__filters">
		{#each navItems as navItem, index}
			<span
				onclick={(e) => handleClick(e, index)}
				class:active-work={active === index}
				class="work__item"
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && handleClick(e as unknown as MouseEvent, index)}
			>
				{navItem}
			</span>
		{/each}
	</div>

	<div class="work__container container grid">
		{#each projects as project (project.id)}
			<WorkItems {project} onmessage={handleMessage} />
		{/each}
	</div>

	{#if currentProject}
		<div class={showDetails ? 'projects__modal active-modal' : 'projects__modal'}>
			<div class="projects__modal-content">
				<i
					onclick={() => (showDetails = false)}
					class="uil uil-times projects__modal-close"
					role="button"
					tabindex="0"
					onkeydown={(e) => e.key === 'Enter' && (showDetails = false)}
				></i>
				<h3 class="projects__modal-title">{currentProject.title}</h3>
				<p class="projects__modal-description">
					{currentProject.description}
				</p>
			</div>
		</div>
	{/if}
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

	.projects__modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--overlay-color);
		z-index: var(--z-modal);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 1rem;
		opacity: 0;
		visibility: hidden;
		transition: 0.3s;
	}

	.projects__modal-content {
		width: 500px;
		position: relative;
		background-color: var(--container-color);
		padding: 4.5rem 2.5rem 2.5rem;
		border-radius: 1.5rem;
	}

	.projects__modal-close {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		font-size: 1.5rem;
		color: var(--title-color);
		cursor: pointer;
	}

	.projects__modal-title,
	.projects__modal-description {
		text-align: center;
	}

	.projects__modal-title {
		font-size: var(--h3-font-size);
		font-weight: var(--font-medium);
		margin-bottom: var(--mb-1);
	}

	.projects__modal-description {
		font-size: var(--small-font-size);
		padding: 0 3.5rem;
		margin-bottom: var(--mb-2);
	}

	/* Active Modal */
	.active-modal {
		opacity: 1;
		visibility: visible;
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

		.projects__modal-content {
			padding: 4.5rem 1.5rem 2.5rem;
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
