<script lang="ts">
	import { page } from '$app/state';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	const status = $derived(page.status);
	const message = $derived(page.error?.message ?? 'Something went wrong');
	const is404 = $derived(status === 404);
</script>

<Header />

<main class="main">
	<section class="error section">
		<div class="error__container container">
			<!-- Ghost number watermark -->
			<div class="error__number" aria-hidden="true">{status}</div>

			<!-- Morphing blob — mirrors home section animation -->
			<div class="error__blob" aria-hidden="true"></div>

			<div class="error__content">
				<h1 class="error__title">
					{#if is404}
						Page Not Found
					{:else}
						Oops! Something Went Wrong
					{/if}
				</h1>

				<p class="error__subtitle">
					{#if is404}
						The page you're looking for doesn't exist or has been moved.
					{:else}
						{message}
					{/if}
				</p>

				<a href="/" class="button button--flex error__btn">
					<i class="bx bx-home" style="margin-right: 0.4rem; font-size: 1.1rem;"></i>
					Back to Home
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	.error {
		min-height: calc(100vh - 6rem);
		display: flex;
		align-items: center;
	}

	.error__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		position: relative;
		padding: 4rem 1.5rem;
	}

	/* Ghost status-code watermark */
	.error__number {
		font-size: clamp(8rem, 25vw, 18rem);
		font-weight: var(--font-semi-bold);
		color: var(--title-color);
		opacity: 0.05;
		line-height: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -55%);
		user-select: none;
		pointer-events: none;
		letter-spacing: -0.05em;
	}

	/* Morphing blob — matches the home__img profile animation */
	.error__blob {
		width: 220px;
		height: 220px;
		background: linear-gradient(
			135deg,
			var(--title-color) 0%,
			hsl(var(--hue), var(--sat), 55%) 100%
		);
		opacity: 0.08;
		margin-bottom: 2.5rem;
		animation: blob__animate 8s ease-in-out infinite;
		position: relative;
		z-index: 1;
	}

	@keyframes blob__animate {
		0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
		50%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
		100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
	}

	.error__content {
		position: relative;
		z-index: 2;
	}

	.error__title {
		font-size: var(--h1-font-size);
		color: var(--title-color);
		margin-bottom: var(--mb-0-75);
	}

	.error__subtitle {
		font-size: var(--normal-font-size);
		color: var(--text-color);
		max-width: 36ch;
		margin: 0 auto var(--mb-2);
		line-height: 1.7;
	}

	.error__btn {
		gap: 0.4rem;
		transition: transform 0.2s ease;
	}

	.error__btn:hover {
		transform: translateY(-2px);
	}

	/* For medium devices */
	@media screen and (max-width: 768px) {
		.error__blob {
			width: 160px;
			height: 160px;
		}
	}
</style>
