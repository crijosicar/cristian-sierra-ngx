<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
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

	// getLocale() is not a reactive signal, so we track it with state
	let currentLocale = $state(getLocale());

	async function switchLocale(locale: 'en' | 'es' | 'fr') {
		if (locale === currentLocale) {
			open = false;
			return;
		}
		haptic.trigger('selection');
		open = false;
		// setLocale writes the PARAGLIDE_LOCALE cookie client-side
		setLocale(locale);
		currentLocale = locale;
		// Full reload so SvelteKit's SSR middleware picks up the new cookie
		window.location.reload();
	}

	// Use document-level listener for Safari compatibility (Safari doesn't fire
	// click events on non-interactive elements like divs/body)
	function handleOutsideClick(e: MouseEvent) {
		if (open && containerEl && !containerEl.contains(e.target as Node)) {
			open = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleOutsideClick, true);
		return () => document.removeEventListener('click', handleOutsideClick, true);
	});
</script>

<div class="lang-switcher" class:open bind:this={containerEl}>
	<button
		id="lang-switcher-btn"
		class="lang-switcher__trigger"
		onclick={(e) => { e.stopPropagation(); open = !open; haptic.trigger('light'); }}
		aria-haspopup="listbox"
		aria-expanded={open}
		aria-label="Select language"
		type="button"
	>
		{localeLabels[currentLocale] ?? currentLocale.toUpperCase()}
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
	}

	.lang-switcher__trigger {
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
		z-index: var(--z-fixed);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		list-style: none;
		animation: dropdown-in 0.2s ease;
	}

	@keyframes dropdown-in {
		from { opacity: 0; transform: translateY(-6px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.lang-switcher__option {
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
</style>
