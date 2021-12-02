/** React core **/
import React from 'react';

/** Components **/
import { ButtonLink } from '../../components/ui/ButtonLink';
import { ShortenForm } from '../../components/ShortenForm';
import { FeaturesList } from '../../components/FeaturesList';
import { ShortenLinks } from '../../components/ShortenLinks';

/** Styles **/
import styles from './Home.module.scss';

const LINKS = [
  {
    url: 'https://www.frontendmentor.io',
    shortenLink: 'https://rel.ink/k4lKyk',
  },
  {
    url: 'https://www.twitter.com/frontendmentor',
    shortenLink: 'https://rel.ink/k5lzCyk',
  },
  {
    url: 'https://www.linkedin.com/frontendmentor',
    shortenLink: 'https://rel.ink/kEl43k',
  },
];

export const Home = () => (
  <div className={styles.home}>
    <img
      className={styles['home__image']}
      src={`${process.env.PUBLIC_URL}/images/illustration-working.svg`}
      alt="working"
    />
    <div className={styles['get-started']}>
      <h2 className={styles['get-started__title']}>More than just shorter links</h2>
      <p className={styles['get-started__description']}>
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <ButtonLink to="/features" className={styles['get-started__btn']}>
        Get Started
      </ButtonLink>
    </div>
    <ShortenForm />
    <div className={styles['secondary-content']}>
      <ShortenLinks links={LINKS} />
      <div className={styles['advanced-statistics']}>
        <h3 className={styles['advanced-statistics__title']}>Advanced Statistics</h3>
        <p className={styles['advanced-statistics__description']}>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <FeaturesList />
    </div>
  </div>
);
