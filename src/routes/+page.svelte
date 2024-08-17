<script>
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import ScrollUp from '$lib/components/scrollUp/ScrollUp.svelte';
	import About from '$lib/components/about/About.svelte';
	import Skills from '$lib/components/skills/Skills.svelte';
	import Services from '$lib/components/services/Services.svelte';
	import Qualification from '$lib/components/qualification/Qualification.svelte';
	import Work from '$lib/components/work/Work.svelte';
	import Testimonials from '$lib/components/testimonials/Testimonials.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import Home from '$lib/components/home/Home.svelte';
</script>

<svelte:head>
	<title>Cristian Sierra | Software Engineer</title>
</svelte:head>

<Header />

<main class="main">
	<Home />
	<About />
	<Skills />
	<Services />
	<Qualification />
	<Work />
	<Testimonials />
	<Contact />
</main>

<Footer />
<ScrollUp />
