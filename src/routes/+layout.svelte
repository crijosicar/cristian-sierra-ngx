<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import '../app.css';

	const options = {
		duration: 4000,       // duration of progress bar tween to the `next` value
		initial: 1,           // initial progress bar value
		next: 0,              // next progress value
		pausable: false,      // pause progress bar tween on mouse hover
		dismissable: true,    // allow to dismiss with close button
		reversed: false,      // insert new toast to bottom of stack
		intro: { x: 256 }    // toast intro fly animation settings
	};
</script>

<slot />

<SvelteToast {options} />

