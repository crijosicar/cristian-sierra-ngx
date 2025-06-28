<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const handleScroll = () => {
			const scrollUp = document.querySelector('.scrollup');

			if (window.scrollY >= 560) {
				scrollUp?.classList.add('show-scroll');
			} else {
				scrollUp?.classList.remove('show-scroll');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<a href="#home" class="scrollup">
	<i class="uil uil-arrow-up scrollup__icon"></i>
</a>

<style>
	.scrollup {
		position: fixed;
		right: 2.5rem;
		bottom: -20%;
		background-color: var(--title-color);
		opacity: 0.8;
		padding: 0.3rem 0.5rem;
		border-radius: 0.4rem;
		z-index: var(--z-tooltip);
		transition: 1s ease;
	}

	.scrollup__icon {
		font-size: 1.5rem;
		color: var(--container-color);
	}

	.scrollup:hover {
		background-color: var(--title-color-dark);
	}

	/* Show Scroll */
	.show-scroll {
		bottom: 3rem;
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.scrollup {
			right: 1.5rem;
			padding: 0.25rem 0.4rem;
		}

		.scrollup__icon {
			font-size: 1.25rem;
		}
	}

	/* For medium devices */
	@media screen and (max-width: 768px) {
		.show-scroll {
			bottom: 4rem;
		}
	}

	/* For small devices */
	@media screen and (max-width: 350px) {
		.scrollup {
			right: 1rem;
		}
	}
</style>
