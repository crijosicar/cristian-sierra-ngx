<script lang="ts">
	import emailjs from '@emailjs/browser';

	const sendEmail = (e: Event) => {
		emailjs
			.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e?.target, {
				publicKey: 'YOUR_PUBLIC_KEY'
			})
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error: unknown) => {
					console.log('FAILED...', error.text);
				}
			);
	};
</script>

<section class="contact section" id="contact">
	<h2 class="section__title">Get in touch</h2>
	<span class="section__subtitle">Contact Me</span>

	<div class="contact__container container grid">
		<div class="contact__content">
			<h3 class="contact__title">Talk to me</h3>

			<div class="contact__info">
				<div class="contact__card">
					<i class="bx bx-mail-send contact__card-icon"></i>

					<h3 class="contact__card-title">Email</h3>
					<span class="contact__card-data">csierrac09@gmail.com</span>

					<a href="mailto:csierrac09@gmail.com" class="contact__button">
						Write me{' '}
						<i class="bx bx-right-arrow-alt contact__button-icon"></i>
					</a>
				</div>

				<div class="contact__card">
					<i class="bx bxl-whatsapp contact__card-icon"></i>

					<h3 class="contact__card-title">Whatsapp</h3>
					<span class="contact__card-data">548-255-1056</span>

					<a
						href="https://api.whatsapp.com/send?phone=+15482551056&text=Hello, more information!"
						class="contact__button"
					>
						Write me{' '}
						<i class="bx bx-right-arrow-alt contact__button-icon"></i>
					</a>
				</div>
			</div>
		</div>

		<div class="contact__content">
			<h3 class="contact__title">Write me your project</h3>

			<form on:submit|preventDefault={sendEmail} class="contact__form">
				<div class="contact__form-div">
					<label class="contact__form-tag">Name</label>
					<input
						type="text"
						name="name"
						class="contact__form-input"
						placeholder="Insert your name"
					/>
				</div>

				<div class="contact__form-div">
					<label class="contact__form-tag">Mail</label>
					<input
						type="email"
						name="email"
						class="contact__form-input"
						placeholder="Insert your email"
					/>
				</div>

				<div class="contact__form-div contact__form-area">
					<label class="contact__form-tag">Project</label>
					<textarea
						name="project"
						cols="30"
						rows="10"
						class="contact__form-input"
						placeholder="Write your project"
					></textarea>
				</div>

				<button class="button button--flex">
					Send Message
					<svg
						class="button__icon"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
							fill="var(--container-color)"
						></path>
						<path
							d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
							fill="var(--container-color)"
						></path>
					</svg>
				</button>
			</form>
		</div>
	</div>
</section>

<style>
    .contact__container {
        grid-template-columns: repeat(2, max-content);
        justify-content: center;
        column-gap: 6rem;
        padding-bottom: 3rem;
    }

    .contact__title {
        text-align: center;
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-1-5);
    }

    .contact__info {
        display: grid;
        row-gap: 1rem;
        grid-template-columns: 300px;
    }

    .contact__card {
        background-color: var(--container-color);
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 1rem;
        border-radius: 0.75rem;
        text-align: center;
    }

    .contact__card-icon {
        font-size: 2rem;
        color: var(--title-color);
        margin-bottom: var(--mb-0-25);
    }

    .contact__card-title,
    .contact__card-data {
        font-size: var(--small-font-size);
    }

    .contact__card-title {
        font-weight: var(--font-medium);
    }

    .contact__card-data {
        display: block;
        margin-bottom: var(--mb-0-75);
    }

    .contact__button {
        color: var(--text-color);
        font-size: var(--small-font-size);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        column-gap: 0.25rem;
    }

    .contact__button-icon {
        font-size: 1rem;
        transition: 0.3s;
    }

    .contact__button:hover .contact__button-icon {
        transform: translate(0.25rem);
    }

    .contact__form {
        width: 360px;
    }

    .contact__form-div {
        position: relative;
        margin-bottom: var(--mb-2);
        height: 4rem;
    }

    .contact__form-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid rgba(0, 0, 0, 0.3);
        background: none;
        color: var(--text-color);
        outline: none;
        border-radius: 0.75rem;
        padding: 1.5rem;
        z-index: 1;
    }

    .contact__form-tag {
        position: absolute;
        top: -0.75rem;
        left: 1.25rem;
        font-size: var(--smaller-font-size);
        padding: 0.25rem;
        background-color: var(--body-color);
        z-index: 10;
    }

    .contact__form-area {
        height: 11rem;
    }

    .contact__form-area textarea {
        resize: none;
    }

    /*=============== BREAKPOINTS ===============*/
    /* For large devices */
    @media screen and (max-width: 992px) {
        .contact__container {
            column-gap: 3rem;
        }
    }

    /* For medium devices */
    @media screen and (max-width: 768px) {
        .contact__container {
            grid-template-columns: 1fr;
            row-gap: 3rem;
        }

        .contact__info {
            justify-content: center;
        }

        .contact__form {
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 576px) {
        .contact__info {
            grid-template-columns: 1fr;
        }

        .contact__form {
            width: 100%;
        }
    }

    /* For small devices */
    @media screen and (max-width: 350px) {
    }
</style>
