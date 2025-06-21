<script lang="ts">
	let toggleState = 1;
</script>

<section class="qualification section">
	<h2 class="section__title">Qualification</h2>
	<span class="section__subtitle">My personel journey</span>

	<div class="qualification__container container">
		<div class="qualification__tabs">
			<div
				class={toggleState === 1
					? 'qualification__button qualification__active button--flex'
					: 'qualification__button button--flex'}
				on:click={() => (toggleState = 1)}
			>
				<i class="uil uil-graduation-cap qualification__icon"></i>
				Education
			</div>

			<div
				class={toggleState === 2
					? 'qualification__button qualification__active button--flex'
					: 'qualification__button button--flex'}
				on:click={() => (toggleState = 2)}
			>
				<i class="uil uil-briefcase-alt qualification__icon"></i>
				Experience
			</div>
		</div>

		<div class="qualification__sections">
			<div
				class={toggleState === 1
					? 'qualification__content qualification__content-active'
					: 'qualification__content'}
			>
				<div class="qualification__data">
					<div>
						<h3 class="qualification__title">Golang Development</h3>
						<span class="qualification__subtitle"> Canada - ComIT </span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2024 - 2024
						</div>
					</div>

					<div>
						<span class="qualification__rounder"></span>
						<span class="qualification__line"></span>
					</div>
				</div>

				<div class="qualification__data">
					<div></div>
					<div>
						<span class="qualification__rounder"></span>
						<span class="qualification__line"></span>
					</div>
					<div>
						<h3 class="qualification__title">Web Development</h3>
						<span class="qualification__subtitle"> Canada - Conestoga College </span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2022 - 2023
						</div>
					</div>
				</div>

				<div class="qualification__data">
					<div>
						<h3 class="qualification__title">Software Engineering</h3>
						<span class="qualification__subtitle">
							Colombia - Universidad Distrital Francisco Jose de Caldas
						</span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2017 - 2018
						</div>
					</div>
					<div>
						<span class="qualification__rounder"></span>
						<span class="qualification__line"></span>
					</div>
				</div>

				<div class="qualification__data">
					<div></div>

					<div>
						<span class="qualification__rounder"></span>
					</div>

					<div>
						<h3 class="qualification__title">Systems Engineer</h3>
						<span class="qualification__subtitle">
							Colombia - Corporacion Universitaria Rafael Nuñez
						</span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2011 - 2015
						</div>
					</div>
				</div>
			</div>

			<div
				class={toggleState === 2
					? 'qualification__content qualification__content-active'
					: 'qualification__content'}
			>
				<div class="qualification__data">
					<div>
						<h3 class="qualification__title">Software Engineer</h3>
						<span class="qualification__subtitle"> MCAP - Canada </span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2024 - Present
						</div>
					</div>

					<div>
						<span class="qualification__rounder"></span>
						<span class="qualification__line"></span>
					</div>
				</div>

				<div class="qualification__data">
					<div></div>

					<div>
						<span class="qualification__rounder"></span>
						<span class="qualification__line"></span>
					</div>

					<div>
						<h3 class="qualification__title">Software Engineer</h3>
						<span class="qualification__subtitle"> Dualboot Partners - USA </span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2022 - 2024
						</div>
					</div>
				</div>

				<div class="qualification__data">
					<div>
						<h3 class="qualification__title">Ssr Node.js Developer</h3>
						<span class="qualification__subtitle">Globant - Colombia</span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2019 - 2021
						</div>
					</div>

					<div>
						<span class="qualification__rounder"></span>
						<span class="qualification__line"></span>
					</div>
				</div>

				<div class="qualification__data">
					<div></div>

					<div>
						<span class="qualification__rounder"></span>
						<span class="qualification__line"></span>
					</div>

					<div>
						<h3 class="qualification__title">Software Engineer</h3>
						<span class="qualification__subtitle"> Banco Davivienda - Colombia </span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2019 - 2019
						</div>
					</div>
				</div>

				<div class="qualification__data">
					<div>
						<h3 class="qualification__title">Software Developer</h3>
						<span class="qualification__subtitle">MDS - Colombia</span>
						<div class="qualification__calender">
							<i class="uil uil-calendar-alt"></i> 2016 - 2018
						</div>
					</div>
					<div>
						<span class="qualification__rounder"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.qualification__container {
		max-width: 768px;
	}

	.qualification__tabs {
		display: flex;
		justify-content: center;
		margin-bottom: var(--mb-2);
	}

	.qualification__button {
		font-size: var(--h3-font-size);
		font-weight: var(--font-medium);
		color: var(--title-color);
		margin: 0 var(--mb-1);
		cursor: pointer;
	}

	.qualification__button:hover {
		color: var(--title-color-dark);
	}

	.qualification__icon {
		font-size: 1.8rem;
		margin-right: var(--mb-0-25);
	}

	.qualification__active {
		color: var(--title-color-dark);
	}

	.qualification__sections {
		display: grid;
		grid-template-columns: 0.5fr;
		justify-content: center;
	}

	.qualification__content {
		display: none;
	}

	.qualification__content-active {
		display: block;
	}

	.qualification__data {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		column-gap: 1.5rem;
	}

	.qualification__title {
		font-size: var(--normal-font-size);
		font-weight: var(--font-medium);
	}

	.qualification__subtitle {
		display: inline-block;
		font-size: var(--small-font-size);
		margin-bottom: var(--mb-1);
	}

	.qualification__calender {
		font-size: var(--small-font-size);
	}

	.qualification__rounder {
		display: inline-block;
		width: 13px;
		height: 13px;
		background-color: var(--text-color);
		border-radius: 50%;
	}

	.qualification__line {
		display: block;
		width: 1px;
		height: 100%;
		background-color: var(--text-color);
		transform: translate(6px, -7px);
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.qualification__container {
			margin-left: auto;
			margin-right: auto;
		}
	}

	/* For medium devices */
	@media screen and (max-width: 768px) {
		.qualification__container {
			margin-left: var(--mb-1-5);
			margin-right: var(--mb-1-5);
		}
	}

	@media screen and (max-width: 576px) {
		.qualification__sections {
			grid-template-columns: initial;
		}

		.qualification__button {
			margin: 0 var(--mb-0-75);
		}
	}

	/* For small devices */
	@media screen and (max-width: 350px) {
		.qualification__data {
			gap: 0.5rem;
		}
	}
</style>
