<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Project } from '$lib/shared/constants';

	export let project: Project;

	const dispatch = createEventDispatcher();
</script>

<div class="work__card">
	<img src={project.image} alt="" class="work__img" />
	<h3 class="work__title">{project.title}</h3>
	<a href="javascript:void(0)" class="work__button" on:click={() => dispatch('message', project)}>
		View More
		<i class="bx bx-right-arrow-alt work__button-icon"></i>
	</a>
</div>

<style>
	.work__card {
		background-color: var(--container-color);
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 1.25rem;
		border-radius: 1rem;
	}

	.work__img {
		width: 295px;
		border-radius: 1rem;
		margin-bottom: var(--mb-1);
	}

	.work__title {
		font-size: var(--normal-font-size);
		font-weight: var(--font-medium);
		margin-bottom: var(--mb-0-5);
	}

	.work__button {
		width: max-content;
		color: var(--text-color);
		font-size: var(--small-font-size);
		display: flex;
		align-items: center;
		column-gap: 0.25rem;
	}

	.work__button-icon {
		font-size: 1rem;
		transition: 0.4s;
	}

	.work__button:hover .work__button-icon {
		transform: translateX(0.25rem);
	}

	/*==================== MEDIA QUERIES ====================*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.work__card {
			padding: 1rem;
		}

		.work__img {
			margin-bottom: 0.75rem;
		}

		.work__title {
			margin-bottom: 0.25rem;
		}
	}

	@media screen and (max-width: 576px) {
		.work__img {
			width: 100%;
		}
	}
</style>
