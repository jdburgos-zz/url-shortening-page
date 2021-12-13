/** React core **/
import React from 'react';

/** Styles **/
import styles from './Features.module.scss';

export const Features = () => {
  return (
    <div className={styles.features}>
      <img
        className={styles['home__image']}
        src={`${process.env.PUBLIC_URL}/images/6685.jpg`}
        alt="working"
      />
      <h2 className={styles['features__title']}>Features</h2>
      <p className={styles['features__description']}>
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
    </div>
  );
};
