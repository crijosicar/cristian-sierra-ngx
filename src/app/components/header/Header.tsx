'use client';

import styles from './Header.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    useEffect(() => {
        /*=============== Change Background Header ===============*/
        window.addEventListener('scroll', function () {
            const header = document.querySelector('.header');
            // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
            if (this.scrollY >= 80) header?.classList.add('scroll-header');
            else header?.classList.remove('scroll-header');
        });
    }, []);

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    return (
        <header className={styles.header}>
            <nav className={classNames(styles.nav, 'container')}>
                <Link href="/public" className={styles.nav__logo}>
                    Sierra
                </Link>
                <div
                    className={classNames(styles.nav__menu, {
                        [styles.showMenu]: Toggle,
                    })}
                >
                    <ul className={classNames(styles.nav__list, 'grid')}>
                        <li className={styles.nav__item}>
                            <Link
                                href="#home"
                                onClick={() => setActiveNav('#home')}
                                className={classNames(styles.nav__link, {
                                    'active-link': activeNav === '#home',
                                })}
                            >
                                <i className={classNames('uil', 'uil-estate', styles.nav__icon)}></i> Home
                            </Link>
                        </li>

                        <li className={styles.nav__item}>
                            <Link
                                href="#about"
                                onClick={() => setActiveNav('#about')}
                                className={classNames(styles.nav__link, {
                                    'active-link': activeNav === '#about',
                                })}
                            >
                                <i className={classNames('uil', 'uil-user', styles.nav__icon)}></i> About
                            </Link>
                        </li>

                        <li className={styles.nav__item}>
                            <Link
                                href="#skills"
                                onClick={() => setActiveNav('#skills')}
                                className={classNames(styles.nav__link, {
                                    'active-link': activeNav === '#skills',
                                })}
                            >
                                <i className={classNames('uil', 'uil-file-alt', styles.nav__icon)}></i> Skills
                            </Link>
                        </li>

                        <li className={styles.nav__item}>
                            <Link
                                href="#services"
                                onClick={() => setActiveNav('#services')}
                                className={classNames(styles.nav__link, {
                                    'active-link': activeNav === '#services',
                                })}
                            >
                                <i className={classNames('uil', 'uil-briefcase-alt', styles.nav__icon)}></i> Services
                            </Link>
                        </li>

                        <li className={styles.nav__item}>
                            <Link
                                href="#portfolio"
                                onClick={() => setActiveNav('#portfolio')}
                                className={classNames(styles.nav__link, {
                                    'active-link': activeNav === '#portfolio',
                                })}
                            >
                                <i className={classNames('uil', 'uil-scenery', styles.nav__icon)}></i> Portfolio
                            </Link>
                        </li>

                        <li className={styles.nav__item}>
                            <Link
                                href="#contact"
                                onClick={() => setActiveNav('#contact')}
                                className={classNames(styles.nav__link, {
                                    'active-link': activeNav === '#contact',
                                })}
                            >
                                <i className={classNames('uil', 'uil-message', styles.nav__icon)}></i> Contact
                            </Link>
                        </li>
                    </ul>

                    <i
                        className={classNames('uil', 'uil-times', styles.nav__close)}
                        onClick={() => showMenu(!Toggle)}
                    ></i>
                </div>
                <div className={styles.nav__toggle} onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}
