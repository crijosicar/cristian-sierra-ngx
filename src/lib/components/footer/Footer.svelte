<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer__container container">
		<h1 class="footer__title">{'<CRISTIANS/>'}</h1>

		<ul class="footer__list">
			<li>
				<a href="/#about" class="footer__link">{m.footer_about()}</a>
			</li>

			<li>
				<a href="/#projects" class="footer__link">{m.footer_projects()}</a>
			</li>

			<li>
				<a href="/#testimonials" class="footer__link">{m.footer_testimonials()}</a>
			</li>
		</ul>

		<div class="footer__social">
			<a href="https://github.com/crijosicar" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
				<i class="bx bxl-github"></i>
			</a>

			<a href="https://www.linkedin.com/in/crijosicar" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
				<i class="bx bxl-linkedin"></i>
			</a>

			<a href="https://x.com/crijosicar" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) profile">
				<i class="bx bxl-twitter"></i>
			</a>
		</div>

		<span class="footer__copy">&copy; {currentYear} Cristian Sierra. {m.footer_copy()}</span>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--container-color);
		border-top: 1px solid var(--border-color);
		transition: background-color 0.3s ease;
	}

	.footer__container {
		padding: 2rem 0 6rem;
	}

	.footer__title,
	.footer__link {
		color: var(--title-color);
	}

	.footer__title {
		text-align: center;
		margin-bottom: var(--mb-2);
	}

	.footer__link:hover {
		color: var(--title-color-dark);
	}

	.footer__list {
		display: flex;
		justify-content: center;
		column-gap: 1.5rem;
		margin-bottom: var(--mb-2);
	}

	.footer__social {
		display: flex;
		justify-content: center;
		column-gap: 1.25rem;
	}

	.footer__social-link {
		background-color: var(--title-color);
		color: var(--container-color);
		font-size: 1.125rem;
		padding: 0.4rem;
		border-radius: 0.5rem;
		display: inline-flex;
	}

	.footer__social-link:hover {
		background-color: var(--title-color-dark);
	}

	.footer__copy {
		display: block;
		margin-top: 4.5rem;
		color: var(--title-color);
		text-align: center;
		font-size: var(--smaller-font-size);
	}

	/*=============== BREAKPOINTS ===============*/
	/* For large devices */
	@media screen and (max-width: 992px) {
		.footer__social-link {
			padding: 0.25rem;
			border-radius: 0.25rem;
			font-size: 1rem;
		}
	}
</style>
