declare module 'svelte-feature-flag' {
	import type { SvelteComponent } from 'svelte';

	export class FlagsPanel extends SvelteComponent<{
		flags: Record<string, boolean>;
	}> {}

	export class FeatureFlag extends SvelteComponent<{
		on: string;
		flags: Record<string, boolean>;
	}> {}
}
