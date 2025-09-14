<script lang="ts">
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	const options = {
		duration: 4000, // duration of progress bar tween to the `next` value
		initial: 1, // initial progress bar value
		next: 0, // next progress value
		pausable: true, // pause progress bar tween on mouse hover
		dismissable: true, // allow to dismiss with close button
		reversed: false // insert new toast to bottom of stack
	};
</script>

<slot />

<SvelteToast {options} />

<style>
	:root {
		--toastBackground: var(--title-color);
		--toastMsgPadding: 1.25rem 2rem;
		--toastBorderRadius: 1rem;
		--toastFontWeight: var(--font-medium);
		--toastFontSize: var(--normal-font-size);
		--toastWidth: 400px;
	}
</style>
