<script lang="ts">
	import Frontend from './Frontend.svelte';
	import Backend from './Backend.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="skills section" id="skills">
	<h2 class="section__title">{m.skills_title()}</h2>
	<span class="section__subtitle">{m.skills_subtitle()}</span>

	<div class="skills__container container grid">
		<Frontend />
		<Backend />
	</div>
</section>

<style>
	.skills__container {
		grid-template-columns: repeat(2, 350px);
		column-gap: 3rem;
		justify-content: center;
	}

	:global(.skills .bx-badge-check) {
		font-size: 1rem;
		color: var(--title-color);
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.skills__container {
			grid-template-columns: max-content;
			row-gap: 2rem;
		}
	}

	/* For medium devices */
	@media screen and (max-width: 576px) {
		.skills__container {
			grid-template-columns: 1fr;
		}
	}
</style>
