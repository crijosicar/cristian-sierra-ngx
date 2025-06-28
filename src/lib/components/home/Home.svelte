<script lang="ts">
	import Social from './Social.svelte';
	import Data from './Data.svelte';
	import ScrollDown from './ScrollDown.svelte';
</script>

<section class="home section" id="home">
	<div class="home__container container grid">
		<div class="home__content grid">
			<Social />
			<div class="home__img"></div>
			<Data />
		</div>
		<ScrollDown />
	</div>
</section>

<style>
	.home__container {
		row-gap: 7rem;
	}

	.home__content {
		grid-template-columns: 116px repeat(2, 1fr);
		padding-top: 5.5rem;
		column-gap: 2rem;
		align-items: center;
	}

	.home__img {
		background: url(/assets/about.jpeg) no-repeat center;
		background-size: cover;
		box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
		order: 1;
		justify-self: center;
		width: 300px;
		height: 300px;
		animation: profile__animate 8s ease-in-out infinite;
	}

	@keyframes profile__animate {
		0% {
			border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
		}

		50% {
			border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
		}

		100% {
			border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
		}
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.home__content {
			grid-template-columns: 100px repeat(2, 1fr);
			column-gap: 1.25rem;
		}

		.home__img {
			width: 250px;
			height: 250px;
			box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
		}
	}

	/* For medium devices */
	@media screen and (max-width: 768px) {
		.home__content {
			grid-template-columns: 0.5fr 3fr;
			padding-top: 3.5rem;
		}

		.home__img {
			order: initial;
			justify-self: initial;
		}

		.home__img {
			box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
			width: 200px;
			height: 200px;
		}
	}

	/* For small devices */
	@media screen and (max-width: 350px) {
		.home__img {
			width: 180px;
			height: 180px;
		}
	}
</style>
