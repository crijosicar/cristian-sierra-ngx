'use client';

import styles from './ScrollUp.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect } from 'react';

const ScrollUp = () => {
    useEffect(() => {
        window.addEventListener('scroll', function () {
            const scrollUp = document.querySelector('.scrollup');
            // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
            if (this.scrollY >= 560) scrollUp?.classList.add('show-scroll');
            else scrollUp?.classList.remove('show-scroll');
        });
    }, []);

    return (
        <Link href="#" className={styles.scrollup}>
            <i className={classNames(`uil uil-arrow-up ${styles.scrollup__icon}`)}></i>
        </Link>
    );
};

export default ScrollUp;
