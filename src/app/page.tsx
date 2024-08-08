import styles from './page.module.css';
import classNames from 'classnames';

import ScrollDown from '@/app/components/scrolldown/ScrollDown';

export default function Home() {
    return (
        <section className={classNames('home', 'section')} id="home">
            <div className={classNames(styles.home__container, 'container', 'grid')}>
                <div className={classNames('home__content', 'grid')}>
                    <div className={classNames('home__img')}></div>
                </div>

                <ScrollDown />
            </div>
        </section>
    );
}
