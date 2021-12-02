/** React core **/
import React from 'react';

/** Components **/
import { ButtonLink } from '../../components/ui';
import { ShortenForm } from '../../components/ShortenForm';
import { FeaturesList } from '../../components/FeaturesList';
import { ShortenLinks } from '../../components/ShortenLinks';

/** Styles **/
import styles from './Home.module.scss';

const LINKS = JSON.parse(localStorage.getItem('shortenLinks'));
const hasLinks = LINKS && !!LINKS.length;

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
      {hasLinks && <ShortenLinks links={LINKS} />}
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
