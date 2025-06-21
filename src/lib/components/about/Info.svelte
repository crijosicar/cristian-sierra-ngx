<div class="about__info grid">
	<div class="about__box">
		<i class="bx bx-award about__icon"></i>

		<h3 class="about__title">Experience</h3>
		<span class="about__subtitle">7+ Years Working</span>
	</div>

	<div class="about__box">
		<i class="bx bx-briefcase-alt about__icon"></i>

		<h3 class="about__title">Completed</h3>
		<span class="about__subtitle">5 + Projects</span>
	</div>

	<div class="about__box">
		<i class="bx bx-support about__icon"></i>

		<h3 class="about__title">Available</h3>
		<span class="about__subtitle">Ready to rock</span>
	</div>
</div>

<style>
	.about__info {
		grid-template-columns: repeat(3, 140px);
		gap: 0.5rem;
		margin-bottom: var(--mb-2);
	}

	.about__box {
		background-color: var(--container-color);
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 0.75rem;
		text-align: center;
		padding: 1rem 1.25rem;
	}

	.about__icon {
		font-size: 1.5rem;
		color: var(--title-color);
		margin-bottom: var(--mb-0-5);
	}

	.about__title {
		font-size: var(--small-font-size);
		font-weight: var(--font-medium);
	}

	.about__subtitle {
		font-size: var(--tiny-font-size);
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.about__box {
			padding: 0.75rem 0.5rem;
		}
		.about__info {
			justify-content: center;
		}
	}

	/* For medium devices */
	@media screen and (max-width: 576px) {
		.about__info {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* For small devices */
	@media screen and (max-width: 350px) {
		.about__info {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
