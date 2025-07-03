<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import ScrollUp from '$lib/components/scrollUp/ScrollUp.svelte';
	import Shelf from '$lib/components/shelf/Shelf.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { posts } = data;
</script>

<svelte:head>
	<title>Posts | Software Engineer</title>
	<meta name="description" content="Cristian Sierra | Software Engineer" />
	<meta name="keywords" content="Cristian Sierra | Software Engineer" />
	<meta name="author" content="Cristian Sierra" />
</svelte:head>

<Header />

<main class="main">
	{#if posts.length}
		<Shelf {posts} />
	{/if}
</main>

<Footer />
<ScrollUp />
