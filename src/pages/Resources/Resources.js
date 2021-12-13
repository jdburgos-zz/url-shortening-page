/** React core **/
import React from 'react';

/** Styles **/
import styles from './Resources.module.scss';

export const Resources = () => {
  return (
    <div className={styles.resources}>
      <img
        className={styles['home__image']}
        src={`${process.env.PUBLIC_URL}/images/april.jpg`}
        alt="working"
      />
      <h2 className={styles['resources__title']}>Resources</h2>
      <p className={styles['resources__description']}>
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
    </div>
  );
};
