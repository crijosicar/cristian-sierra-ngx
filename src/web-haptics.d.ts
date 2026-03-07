// Type declaration for web-haptics Svelte binding
// The package ships JS but no .d.ts for the /svelte subpath.
declare module 'web-haptics/svelte' {
	export type HapticInput =
		| number
		| string
		| number[]
		| { duration: number; intensity?: number; delay?: number }[];

	export interface TriggerOptions {
		intensity?: number;
	}

	export interface WebHapticsInstance {
		trigger(input?: HapticInput, options?: TriggerOptions): Promise<void>;
		cancel(): void;
		destroy(): void;
		setDebug(debug: boolean): void;
		isSupported: boolean;
	}

	export interface WebHapticsOptions {
		debug?: boolean;
		showSwitch?: boolean;
	}

	export function createWebHaptics(options?: WebHapticsOptions): WebHapticsInstance;
}
