<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { FlagsPanel } from 'svelte-feature-flag';
	import flags from '$lib/flags.json';
</script>

<svelte:head>
	<title>Admin | Cristian Sierra | Software Engineer</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Header />

<main class="main">
	<h1>Admin</h1>
	<FlagsPanel {flags} />
</main>

<Footer />
