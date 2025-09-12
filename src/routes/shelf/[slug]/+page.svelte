<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import ContentEditor from '$lib/components/contentEditor/ContentEditor.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
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
		<h2 class="section__title">{data.post.title ?? data.post.meta?.title}</h2>
		<p class="section__subtitle">
			{data.post.meta?.description ?? ''} <br />
			{`${data.post.populatedAuthors?.[0]?.name} - ${data.post.formattedDate}`}
		</p>
		<div class="container">
			<ContentEditor content={data.post.content} />
		</div>
	</section>
</main>

<Footer />

<style>
	.section__subtitle {
		margin: 0 var(--mb-3);
		font-size: var(--normal-font-size);
		word-break: break-all;
	}

	.author {
		margin: var(--mb-3) 0;
		font-size: var(--small-font-size);
		color: var(--text-color);
	}
</style>
