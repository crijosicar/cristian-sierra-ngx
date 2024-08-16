<div class="skills__content">
	<h3 class="skills__title">Frontend developer</h3>
	<div class="skills__box">
		<div class="skills__group">
			<div class="skills__data">
				<i class="bx bx-badge-check"></i>

				<div>
					<h3 class="skills__name">HTML</h3>
					<span class="skills__level">Basic</span>
				</div>
			</div>

			<div class="skills__data">
				<i class="bx bx-badge-check"></i>

				<div>
					<h3 class="skills__name">CSS</h3>
					<span class="skills__level">Advanced</span>
				</div>
			</div>

			<div class="skills__data">
				<i class="bx bx-badge-check"></i>

				<div>
					<h3 class="skills__name">JavaScript</h3>
					<span class="skills__level">Intermediate</span>
				</div>
			</div>
		</div>

		<div class="skills__group">
			<div class="skills__data">
				<i class="bx bx-badge-check"></i>

				<div>
					<h3 class="skills__name">Bootstrap</h3>
					<span class="skills__level">Intermediate</span>
				</div>
			</div>

			<div class="skills__data">
				<i class="bx bx-badge-check"></i>

				<div>
					<h3 class="skills__name">Git</h3>
					<span class="skills__level">Intermediate</span>
				</div>
			</div>

			<div class="skills__data">
				<i class="bx bx-badge-check"></i>

				<div>
					<h3 class="skills__name">React</h3>
					<span class="skills__level">Intermediate</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
    .skills__content {
        background-color: var(--container-color);
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 2rem 4rem;
        border-radius: 1.25rem;
    }

    .skills__title {
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
        text-align: center;
        margin-bottom: var(--mb-1-5);
    }

    .skills__box {
        display: flex;
        justify-content: center;
        column-gap: 2.5rem;
    }

    .skills__group {
        display: grid;
        align-items: flex-start;
        row-gap: 1rem;
    }

    .skills__data {
        display: flex;
        column-gap: 0.5rem;
    }

    .skills .bx-badge-check {
        font-size: 1rem;
        color: var(--title-color);
    }

    .skills__name {
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
        line-height: 18px;
    }

    .skills__level {
        font-size: var(--tiny-font-size);
    }

    /*=============== BREAKPOINTS ===============*/
    /* For medium devices */
    @media screen and (max-width: 576px) {
        .skills__content {
            padding: 1.5rem;
        }
    }

    /* For small devices */
    @media screen and (max-width: 350px) {
        .skills__box {
            column-gap: 1.25rem;
        }

        .skills__name {
            font-size: var(--small-font-size);
        }
    }
</style>