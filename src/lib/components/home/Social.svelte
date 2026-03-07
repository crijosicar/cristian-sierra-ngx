<script lang="ts">
	import { onDestroy } from 'svelte';
	import { createWebHaptics } from 'web-haptics/svelte';

	const haptic = createWebHaptics();
	onDestroy(() => haptic.destroy());
</script>

<div class="home__social">
	<a href="https://github.com/crijosicar" class="home__social-icon" target="_blank" onclick={() => haptic.trigger('medium')}>
		<i class="uil uil-github-alt"></i>
	</a>

	<a href="https://www.linkedin.com/in/crijosicar" class="home__social-icon" target="_blank" onclick={() => haptic.trigger('medium')}>
		<i class="uil uil-linkedin-alt"></i>
	</a>

	<a href="https://twitter.com/crijosicar" class="home__social-icon" target="_blank" onclick={() => haptic.trigger('medium')}>
		<i class="uil uil-twitter-alt"></i>
	</a>
</div>


<style>
	.home__social {
		display: grid;
		grid-template-columns: max-content;
		row-gap: 1rem;
	}

	.home__social-icon {
		font-size: 1.25rem;
		color: var(--title-color);
	}

	.home__social-icon:hover {
		color: var(--title-color-dark);
	}

	/* For medium devices */
	@media screen and (max-width: 768px) {
		.home__social {
			display: none;
		}
	}

	/* For small devices */
	@media screen and (max-width: 350px) {
		.home__social {
			display: none;
		}
	}
</style>
