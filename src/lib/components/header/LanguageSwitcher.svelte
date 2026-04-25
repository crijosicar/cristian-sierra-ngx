<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { getLocale, setLocale, locales } from '$lib/paraglide/runtime';
	import { createWebHaptics } from 'web-haptics/svelte';

	const haptic = createWebHaptics();
	onDestroy(() => haptic.destroy());

	let open = $state(false);
	let containerEl: HTMLDivElement;

	const localeLabels: Record<string, string> = {
		en: '🇨🇦 EN',
		es: '🇨🇴 ES',
		fr: '🇨🇦 FR'
	};

	let currentLocale = $state(getLocale());

	async function switchLocale(locale: 'en' | 'es' | 'fr') {
		if (locale === currentLocale) {
			open = false;
			return;
		}
		try { haptic.trigger('selection'); } catch (_) { console.log(_) }
		open = false;
		setLocale(locale);
		currentLocale = locale;
		// Re-run load functions to pick up the new locale cookie without a hard reload
		await invalidateAll();
	}

	function toggleOpen() {
		open = !open;
		try { haptic.trigger('light'); } catch (_) { console.log(_) }
	}

	// Use mousedown (not click) — Safari fires mousedown reliably on all elements.
	// Using capture:false so it runs AFTER Svelte's delegated events settle.
	function handleOutsideMousedown(e: MouseEvent) {
		if (!open) return;
		if (containerEl && containerEl.contains(e.target as Node)) return;
		open = false;
	}

	onMount(() => {
		document.addEventListener('mousedown', handleOutsideMousedown);
		return () => document.removeEventListener('mousedown', handleOutsideMousedown);
	});
</script>

<div class="lang-switcher" class:open bind:this={containerEl}>
	<button
		id="lang-switcher-btn"
		class="lang-switcher__trigger"
		onclick={toggleOpen}
		aria-haspopup="listbox"
		aria-expanded={open}
		aria-label="Select language"
		type="button"
	>
		{localeLabels[currentLocale] ?? currentLocale?.toUpperCase() ?? 'EN'}
		<i class="uil uil-angle-down lang-switcher__arrow"></i>
	</button>

	{#if open}
		<ul class="lang-switcher__dropdown" role="listbox" aria-label="Available languages">
			{#each locales as locale}
				<li role="option" aria-selected={locale === currentLocale}>
					<button
						class="lang-switcher__option"
						class:active={locale === currentLocale}
						onclick={() => switchLocale(locale)}
						type="button"
					>
						{localeLabels[locale] ?? locale.toUpperCase()}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.lang-switcher {
		position: relative;
		z-index: 100;
	}

	.lang-switcher__trigger {
		-webkit-appearance: none;
		appearance: none;
		background: none;
		border: 1px solid var(--border-color);
		color: var(--title-color);
		font-size: var(--smaller-font-size);
		font-weight: var(--font-medium);
		cursor: pointer;
		padding: 0.3rem 0.6rem;
		border-radius: 0.4rem;
		display: flex;
		align-items: center;
		column-gap: 0.2rem;
		transition: color 0.3s ease, border-color 0.3s ease;
	}

	.lang-switcher__trigger:hover {
		color: var(--title-color-dark);
		border-color: var(--title-color-dark);
	}

	.lang-switcher__arrow {
		font-size: 1rem;
		transition: transform 0.3s ease;
		pointer-events: none;
	}

	.lang-switcher.open .lang-switcher__arrow {
		transform: rotate(180deg);
	}

	.lang-switcher__dropdown {
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		background-color: var(--container-color);
		border: 1px solid var(--border-color);
		border-radius: 0.5rem;
		padding: 0.3rem;
		min-width: 6rem;
		z-index: 200;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		list-style: none;
	}

	.lang-switcher__option {
		-webkit-appearance: none;
		appearance: none;
		display: block;
		width: 100%;
		text-align: left;
		padding: 0.4rem 0.6rem;
		border: none;
		border-radius: 0.35rem;
		background: none;
		font-size: var(--smaller-font-size);
		font-weight: var(--font-medium);
		color: var(--title-color);
		cursor: pointer;
		transition: background-color 0.2s ease, color 0.2s ease;
		white-space: nowrap;
	}

	.lang-switcher__option:hover {
		background-color: var(--body-color);
		color: var(--title-color-dark);
	}

	.lang-switcher__option.active {
		color: var(--title-color-dark);
		font-weight: var(--font-semi-bold);
	}

	/* Mobile: header is at the bottom, so dropdown opens upward */
	@media screen and (max-width: 768px) {
		.lang-switcher__dropdown {
			top: auto;
			bottom: 100%;
			margin-bottom: 0.5rem;
		}
	}
</style>
