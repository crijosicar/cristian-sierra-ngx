<script lang="ts">
	import Works from './Works.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="work section" id="projects">
	<h2 class="section__title">{m.projects_title()}</h2>
	<span class="section__subtitle">{m.projects_subtitle()}</span>
	<Works />
</section>
