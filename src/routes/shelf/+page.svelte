<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { docs } = data;
</script>

<svelte:head>
	<title>Posts | Software Engineer</title>
	<meta name="description" content="Cristian Sierra | Software Engineer" />
	<meta name="keywords" content="Cristian Sierra | Software Engineer" />
	<meta name="author" content="Cristian Sierra" />
</svelte:head>

<Header />

<main class="main">
	<section class="services section" id="shelf">
		<h2 class="section__title">Shelf</h2>
		<span class="section__subtitle">My thought processing</span>
		{#each docs as { title, slug, meta }}
			<div class="services__container container grid">
				<div class="services__content">
					<div>
						<i class="uil uil-newspaper services__icon"></i>
						<h3 class="services__title">
							{title}
						</h3>
						<p class="services__description">{meta?.description?.substring(0, 60)}</p>
					</div>
					<span class="services__button">
						<a data-sveltekit-preload-data="tap" href="/shelf/{slug}/">
							View More
							<i class="uil uil-arrow-right services__button-icon"></i>
						</a>
					</span>
				</div>
			</div>
		{/each}
	</section>
</main>

<Footer />

<style>
	.services__container {
		grid-template-columns: repeat(3, 270px);
		justify-content: center;
		column-gap: 1.8rem;
	}

	.services__content {
		position: relative;
		border: 1px solid rgba(0, 0, 0, 0.1);
		background-color: var(--container-color);
		padding: 2rem;
	}

	.services__description {
		font-size: var(--small-font-size);
		line-height: 1.5;
		margin-bottom: var(--mb-2);
		margin-block-end: 1em;
		word-break: break-all;
	}

	.services__icon {
		display: block;
		font-size: 2rem;
		color: var(--title-color);
		margin-bottom: var(--mb-1);
	}

	.services__title {
		font-size: var(--h3-font-size);
		margin-bottom: var(--mb-1);
		font-weight: var(--font-medium);
	}

	.services__button {
		color: var(--title-color);
		font-size: var(--small-font-size);
		display: inline-flex;
		align-items: center;
		column-gap: 0.25rem;
		cursor: pointer;
	}

	.services__button-icon {
		font-size: 1rem;
		transition: 0.3s;
	}

	.services__button:hover .services__button-icon {
		transform: translateX(00.25rem);
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.services__container {
			grid-template-columns: repeat(3, 218px);
		}
	}

	/* For medium devices */
	@media screen and (max-width: 768px) {
		.services__container {
			grid-template-columns: repeat(2, 1fr);
		}

		.services__content {
			padding: 3.5rem 0.5rem 1.25rem 1.5rem;
		}

		.services__icon {
			font-size: 1.5rem;
		}
	}

	/* For small devices */
	@media screen and (max-width: 350px) {
		.services__container {
			grid-template-columns: max-content;
		}

		.services__content {
			padding-right: 6rem;
		}
	}
</style>
