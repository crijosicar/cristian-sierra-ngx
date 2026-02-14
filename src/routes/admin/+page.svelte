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
	<div class="flex justify-between items-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-white">Admin</h1>
		<a
			href="/admin/logout"
			class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors duration-200"
		>
			Logout
		</a>
	</div>
	<FlagsPanel {flags} />
</main>

<Footer />
