<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import ContentEditor from '$lib/components/contentEditor/ContentEditor.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.post.meta?.title}</title>
	<meta name="description" content={data.post.meta?.description} />
	<meta name="keywords" content={data.post.meta?.description} />
	<meta name="author" content={data.post.populatedAuthors?.[0]?.name} />
</svelte:head>

<Header />

<main class="main">
	<section class="services section" id="shelf">
		<div class="container">
			<h2 class="section__title">{data.post.title ?? data.post.meta?.title}</h2>
			<p class="section__subtitle">
				{data.post.meta?.description ?? ''} <br />
			</p>
			<span class="section__subtitle author"
				>{`${data.post.populatedAuthors?.[0]?.name} - Published on ${data.post.formattedDate}`}</span
			>
			<ContentEditor content={data.post.content} />
		</div>
	</section>
</main>

<Footer />

<style>
	.section__title {
		margin: var(--mb-3) 0;
		font-size: var(--h2-font-size);
		font-weight: var(--font-medium);
	}

	.section__subtitle {
		margin: 0 var(--mb-3);
		font-size: var(--normal-font-size);
		word-break: break-all;
	}

	.author {
		margin: var(--mb-1) 0;
		font-size: var(--small-font-size);
		color: var(--text-color);
		font-weight: var(--font-medium);
	}
</style>
