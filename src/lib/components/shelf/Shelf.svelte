<script lang="ts">
	import type { Post } from '$lib/entities/posts.types';
    export let posts: Array<Post>;
</script>

<section class="services section" id="shelf">
	<h2 class="section__title">Shelf</h2>
	<span class="section__subtitle">I can help with</span>
    {#each posts as {title}}
        <div class="services__container container grid">
            <div class="services__content">
                <div>
                    <i class="uil uil-web-grid services__icon"></i>
                    <h3 class="services__title">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    {/each}
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
