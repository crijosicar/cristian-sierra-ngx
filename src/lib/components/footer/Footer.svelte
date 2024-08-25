<footer class="footer">
	<div class="footer__container container">
		<h1 class="footer__title">Sierra</h1>

		<ul class="footer__list">
			<li>
				<a href="#about" class="footer__link"> About </a>
			</li>

			<li>
				<a href="#portfolio" class="footer__link"> Projects </a>
			</li>

			<li>
				<a href="#testimonials" class="footer__link"> Testimonials </a>
			</li>
		</ul>

		<div class="footer__social">
			<a href="https://www.instagram.com/crijosicar/" class="footer__social-link" target="_blank">
				<i class="bx bxl-instagram"></i>
			</a>

			<a href="https://x.com/crijosicar" class="footer__social-link" target="_blank">
				<i class="bx bxl-twitter"></i>
			</a>

			<a href="https://github.com/crijosicar" class="footer__social-link" target="_blank">
				<i class="bx bxl-github"></i>
			</a>
		</div>

		<span class="footer__copy"> &#169; Cristian Sierra. All rights reserved </span>
	</div>
</footer>

<style>
    .footer {
        background-color: var(--container-color);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
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
