<script lang="ts">
	import { onMount } from 'svelte';

	let toggle = false;
	let activeNav = '#home';

	onMount(() => {
		const handleScroll = () => {
			const header = document.querySelector('.header');
			if (window.scrollY >= 80) {
				header?.classList.add('scroll-header');
			} else {
				header?.classList.remove('scroll-header');
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const showMenu = () => {
		toggle = !toggle;
	};
</script>

<header class="header">
	<nav class="nav container">
		<a href="/" class="nav__logo">Sierra</a>
		<div class={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
			<ul class="nav__list grid">
				<li class="nav__item">
					<a
						href="#home"
						on:click={() => (activeNav = '#home')}
						class={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
					>
						<i class="uil uil-estate nav__icon"></i> Home
					</a>
				</li>
				<li class="nav__item">
					<a
						href="#about"
						on:click={() => (activeNav = '#about')}
						class={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
					>
						<i class="uil uil-user nav__icon"></i> About
					</a>
				</li>
				<li class="nav__item">
					<a
						href="#skills"
						on:click={() => (activeNav = '#skills')}
						class={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
					>
						<i class="uil uil-file-alt nav__icon"></i> Skills
					</a>
				</li>
				<li class="nav__item">
					<a
						href="#services"
						on:click={() => (activeNav = '#services')}
						class={activeNav === '#services' ? 'nav__link active-link' : 'nav__link'}
					>
						<i class="uil uil-briefcase-alt nav__icon"></i> Services
					</a>
				</li>
				<li class="nav__item">
					<a
						href="#portfolio"
						on:click={() => (activeNav = '#portfolio')}
						class={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'}
					>
						<i class="uil uil-scenery nav__icon"></i> Portfolio
					</a>
				</li>
				<li class="nav__item">
					<a
						href="#contact"
						on:click={() => (activeNav = '#contact')}
						class={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
					>
						<i class="uil uil-message nav__icon"></i> Contact
					</a>
				</li>
			</ul>
			<i class="uil uil-times nav__close" on:click={showMenu}></i>
		</div>
		<div class="nav__toggle" on:click={showMenu}>
			<i class="uil uil-apps"></i>
		</div>
	</nav>
</header>

<style>
	.header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: var(--z-fixed);
		background-color: var(--body-color);
	}

	.nav {
		height: calc(var(--header-height) + 1.5rem);
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 1rem;
	}

	.nav__logo,
	.nav__toggle {
		color: var(--title-color);
		font-weight: var(--font-medium);
	}

	.nav__list {
		display: flex;
		column-gap: 2rem;
	}

	.nav__link {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: var(--small-font-size);
		color: var(--title-color);
		font-weight: var(--font-medium);
		transition: 0.3s;
	}

	.nav__icon,
	.nav__close,
	.nav__toggle {
		display: none;
	}

	/* Active link */
	.active-link,
	.nav__link:hover {
		color: var(--title-color-dark);
	}

	/* Change background header */
	.scroll-header {
		box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
	}

	/*=============== BREAKPOINTS ===============*/
	/* For medium devices */
	@media screen and (max-width: 768px) {
		.header {
			top: initial;
			bottom: 0;
		}

		.nav {
			height: var(--header-height);
		}

		.nav__menu {
			position: fixed;
			bottom: -100%;
			left: 0;
			width: 100%;
			background-color: var(--body-color);
			padding: 2rem 1.5rem 4rem;
			box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
			border-radius: 1.5rem 1.5rem 0 0;
			transition: 0.3s;
		}

		/* Show Menu */
		.show-menu {
			bottom: 0;
		}

		.nav__list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 2rem;
		}

		.nav__icon {
			font-size: 1.2rem;
		}

		.nav__close {
			position: absolute;
			right: 1.3rem;
			bottom: 0.5rem;
			font-size: 1.5rem;
			cursor: pointer;
			color: var(--title-color);
		}

		.nav__close:hover {
			color: var(--title-color-dark);
		}

		.nav__toggle {
			font-size: 1.1rem;
			cursor: pointer;
		}

		.nav__icon,
		.nav__close,
		.nav__toggle {
			display: block;
		}
	}

	/* For small devices */
	@media screen and (max-width: 350px) {
		.nav__menu {
			padding: 2rem 0.25rem 4rem;
		}

		.nav__list {
			column-gap: 0;
		}
	}
</style>
