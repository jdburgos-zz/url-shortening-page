/** React core **/
import React from 'react';

/** Styles **/
import styles from './Pricing.module.scss';

export default function Pricing() {
  return (
    <div className={styles.pricing}>
      <img
        className={styles['home__image']}
        src={`${process.env.PUBLIC_URL}/images/business.jpg`}
        alt="working"
      />
      <h2 className={styles['pricing__title']}>Pricing</h2>
      <p className={styles['pricing__description']}>
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
    </div>
  );
}
