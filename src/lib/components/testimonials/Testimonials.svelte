<script>
	// Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';
	import { testimonialsData } from '$lib/data/testimonialsData';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/pagination';
</script>

<section class="testimonial container section" id="testimonials">
	<h2 class="section__title">Testimonials</h2>
	<span class="section__subtitle">My clients say</span>

	<Swiper
		loop={true}
		grabCursor={true}
		pagination={{ clickable: true }}
		breakpoints={{ 350: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 1024: { slidesPerView: 2, spaceBetween: 24 } }}
		mousewheel={true}
		modules={[Pagination]}
	>
		{#each testimonialsData as testimonial (testimonial.id)}
			<SwiperSlide>
				<div class="testimonial__card">
					<img src={testimonial.image} alt="" class="testimonial__img" />

					<h3 class="testimonial__name">{testimonial.title}</h3>
					<p class="testimonial__description">{testimonial.description}</p>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</section>

<style>
	.testimonial__card {
		background-color: var(--container-color);
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 1.5rem 2rem;
		border-radius: 1.5rem;
		margin-bottom: var(--mb-3);
	}

	.testimonial__img {
		width: 60px;
		border-radius: 3rem;
		margin-bottom: var(--mb-1);
	}

	.testimonial__name {
		font-size: var(--normal-font-size);
		font-weight: var(--font-medium);
		margin-bottom: var(--mb-0-25);
	}

	.testimonial__description {
		font-size: var(--small-font-size);
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.testimonial__container {
			width: initial;
		}

		.testimonial__card {
			padding: 1.25rem 1.5rem;
		}
	}
</style>
