import styles from './Footer.module.css';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer__container} container`}>
                <h1 className={styles.footer__title}>Sierra</h1>

                <ul className={styles.footer__list}>
                    <li>
                        <Link href="#about" className={styles.footer__link}>
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="#portfolio" className={styles.footer__link}>
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link href="#testimonials" className={styles.footer__link}>
                            Testimonials
                        </Link>
                    </li>
                </ul>

                <div className={styles.footer__social}>
                    <Link href="https://www.facebook.com/" className={styles.footer__socialLink} target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </Link>

                    <Link href="https://www.instagram.com/" className={styles.footer__socialLink} target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </Link>

                    <Link href="https://twitter.com/" className={styles.footer__socialLink} target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </Link>
                </div>

                <span className={styles.footer__copy}>&#169; Cristian Sierra. All rigths reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
