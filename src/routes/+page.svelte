<script>
	import Social from '../components/home/Social.svelte';
	import Header from '../components/header/Header.svelte';
	import Footer from '../components/footer/Footer.svelte';
	import ScrollUp from '../components/scrollUp/ScrollUp.svelte';
	import About from '../components/about/About.svelte';
	import Skills from '../components/skills/Skills.svelte';
	import Services from '../components/services/Services.svelte';
	import Qualification from '../components/qualification/Qualification.svelte';
	import Work from '../components/work/Work.svelte';
	import Testimonials from '../components/testimonials/Testimonials.svelte';
	import Contact from '../components/contact/Contact.svelte';
</script>

<svelte:head>
	<title>Cristian Sierra | Software Engineer</title>
</svelte:head>

<Header />

<main class="main">
	<Social />
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