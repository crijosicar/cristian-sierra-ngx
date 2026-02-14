<script lang="ts">
	let activeTab = $state(0);
</script>

<section class="services section" id="services">
	<h2 class="section__title">Services</h2>
	<span class="section__subtitle">I can help with</span>

	<div class="services__container container grid">
		<div class="services__content">
			<div>
				<i class="uil uil-web-grid services__icon"></i>
				<h3 class="services__title">
					Software <br /> Engineering
				</h3>
			</div>

			<span
				class="services__button"
				onclick={() => (activeTab = 1)}
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && (activeTab = 1)}
			>
				View More
				<i class="uil uil-arrow-right services__button-icon"></i>
			</span>

			<div class={activeTab === 1 ? 'services__modal active-modal' : 'services__modal'}>
				<div class="services__modal-content">
					<i
						onclick={() => (activeTab = 0)}
						class="uil uil-times services__modal-close"
						role="button"
						tabindex="0"
						onkeydown={(e) => e.key === 'Enter' && (activeTab = 0)}
					></i>

					<h3 class="services__modal-title">Software Engineering</h3>
					<p class="services__modal-description">
						Delivering scalable and maintainable solutions with over 3 years of hands-on experience
						in fullstack development.
					</p>

					<ul class="services__modal-services grid">
						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								Design and implementation of RESTful APIs and GraphQL endpoints
							</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								Microservices architecture using Node.js, Express, or NestJS
							</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								Authentication & Authorization (OAuth2, JWT, Role-based access control)
							</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								Integration with SQL and NoSQL databases (PostgreSQL, MongoDB, Redis)
							</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								Message queues and event-driven systems with BullMQ, RabbitMQ, or Kafka .
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="services__content">
			<div>
				<i class="uil uil-arrow services__icon"></i>
				<h3 class="services__title">
					Web <br /> Development
				</h3>
			</div>

			<span
				onclick={() => (activeTab = 2)}
				class="services__button"
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && (activeTab = 2)}
			>
				View More
				<i class="uil uil-arrow-right services__button-icon"></i>
			</span>

			<div class={activeTab === 2 ? 'services__modal active-modal' : 'services__modal'}>
				<div class="services__modal-content">
					<i
						onclick={() => (activeTab = 0)}
						class="uil uil-times services__modal-close"
						role="button"
						tabindex="0"
						onkeydown={(e) => e.key === 'Enter' && (activeTab = 0)}
					></i>

					<h3 class="services__modal-title">Web Development</h3>
					<p class="services__modal-description">
						Crafting fast, accessible, and scalable websites that elevate your brand and drive
						results.
					</p>

					<ul class="services__modal-services grid">
						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								Building responsive UIs with HTML5, CSS3, and JavaScript (ES6+)
							</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">Modern frameworks: React, SvelteKit, Vue.js</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">Styling with Tailwind CSS, SCSS, and CSS Modules</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								SEO-friendly development with proper meta tags and accessibility
							</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								Dynamic, data-driven SPAs and SSR apps using Next.js or SvelteKit
							</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">Admin panels, dashboards, and internal tools</p>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="services__content">
			<div>
				<i class="uil uil-edit services__icon"></i>
				<h3 class="services__title">
					Wordpress <br /> Development
				</h3>
			</div>

			<span
				onclick={() => (activeTab = 3)}
				class="services__button"
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && (activeTab = 3)}
			>
				View More
				<i class="uil uil-arrow-right services__button-icon"></i>
			</span>

			<div class={activeTab === 3 ? 'services__modal active-modal' : 'services__modal'}>
				<div class="services__modal-content">
					<i
						onclick={() => (activeTab = 0)}
						class="uil uil-times services__modal-close"
						role="button"
						tabindex="0"
						onkeydown={(e) => e.key === 'Enter' && (activeTab = 0)}
					></i>

					<h3 class="services__modal-title">Wordpress Development</h3>
					<p class="services__modal-description">
						Custom, fast, and scalable WordPress solutions tailored to grow your online presence.
					</p>

					<ul class="services__modal-services grid">
						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">Custom Theme Development</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">Plugin Development & Customization.</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">
								Page speed optimization using caching, image compression, and lazy loading .
							</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">WooCommerce Development.</p>
						</li>

						<li class="services__modal-service">
							<i class="uil uil-check-circle services__modal-icon"></i>
							<p class="services__modal-info">Multilingual & SEO Ready.</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.services__container {
		grid-template-columns: repeat(3, 270px);
		justify-content: center;
		column-gap: 1.8rem;
	}

	.services__content {
		position: relative;
		border: 1px solid rgba(0, 0, 0, 0.1);
		background-color: var(--container-color);
		padding: 6rem 0 2rem 2.5rem;
	}

	.services__icon {
		display: block;
		font-size: 2rem;
		color: var(--title-color);
		margin-bottom: var(--mb-1);
	}

	.services__title {
		font-size: var(--h3-font-size);
		margin-bottom: var(--mb-1);
		font-weight: var(--font-medium);
	}

	.services__button {
		color: var(--title-color);
		font-size: var(--small-font-size);
		display: inline-flex;
		align-items: center;
		column-gap: 0.25rem;
		cursor: pointer;
	}

	.services__button-icon {
		font-size: 1rem;
		transition: 0.3s;
	}

	.services__button:hover .services__button-icon {
		transform: translateX(00.25rem);
	}

	.services__modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: var(--z-modal);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 1rem;
		opacity: 0;
		visibility: hidden;
		transition: 0.3s;
	}

	.services__modal-content {
		width: 500px;
		position: relative;
		background-color: var(--container-color);
		padding: 4.5rem 2.5rem 2.5rem;
		border-radius: 1.5rem;
	}

	.services__modal-close {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		font-size: 1.5rem;
		color: var(--title-color);
		cursor: pointer;
	}

	.services__modal-title,
	.services__modal-description {
		text-align: center;
	}

	.services__modal-title {
		font-size: var(--h3-font-size);
		font-weight: var(--font-medium);
		margin-bottom: var(--mb-1);
	}

	.services__modal-description {
		font-size: var(--small-font-size);
		padding: 0 3.5rem;
		margin-bottom: var(--mb-2);
	}

	.services__modal-services {
		row-gap: 0.75rem;
	}

	.services__modal-service {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
	}

	.services__modal-icon {
		color: var(--title-color);
		font-size: 1.1rem;
	}

	.services__modal-info {
		font-size: var(--small-font-size);
	}

	/* Active Modal */
	.active-modal {
		opacity: 1;
		visibility: visible;
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.services__container {
			grid-template-columns: repeat(3, 218px);
		}
	}

	/* For medium devices */
	@media screen and (max-width: 768px) {
		.services__container {
			grid-template-columns: repeat(2, 1fr);
		}

		.services__content {
			padding: 3.5rem 0.5rem 1.25rem 1.5rem;
		}

		.services__icon {
			font-size: 1.5rem;
		}
	}

	@media screen and (max-width: 576px) {
		.services__modal-content {
			padding: 4.5rem 1.5rem 2.5rem;
		}

		.services__modal-description {
			padding: 0;
		}
	}

	/* For small devices */
	@media screen and (max-width: 350px) {
		.services__container {
			grid-template-columns: max-content;
		}

		.services__content {
			padding-right: 6rem;
		}
	}
</style>
