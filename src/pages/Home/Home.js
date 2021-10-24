/** React core **/
import React from 'react';

/** Components **/
import { ButtonLink } from '../../components/ui/ButtonLink';
import { ShortenForm } from '../../components/ShortenForm';
import { FeaturesList } from '../../components/FeaturesList';

/** Styles **/
import styles from './Home.module.scss';

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
      <ButtonLink to="/features">Get Started</ButtonLink>
    </div>
    <div>
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
    </div>
    <ShortenForm />
    <FeaturesList />
  </div>
);
