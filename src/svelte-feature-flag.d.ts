declare module 'svelte-feature-flag' {
	import type { SvelteComponent } from 'svelte';

	export class FlagsPanel extends SvelteComponent<{
		flags: any;
	}> {}

	export class FeatureFlag extends SvelteComponent<{
		on: string;
		flags: any;
	}> {}
}
