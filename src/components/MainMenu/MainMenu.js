/** React core **/
import React, { useState } from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';

/** Components **/
import { AuthMenu } from '../AuthMenu';

/** Styles **/
import styles from './MainMenu.module.scss';

export const MainMenu = () => {
  const [isMenuActive, toggleMenu] = useState(false);
  const handleMenu = () => {
    toggleMenu(prevState => !prevState);
  };
  const menu = (
    <div className={styles['main-menu__container']}>
      <Link to="/features" className={styles['main-menu__item']}>
        Features
      </Link>
      <Link to="/pricing" className={styles['main-menu__item']}>
        Pricing
      </Link>
      <Link to="/resources" className={styles['main-menu__item']}>
        Resources
      </Link>
      <AuthMenu />
    </div>
  );

  return (
    <div className={styles['main-menu']}>
      <div className={styles['main-menu__btn']} onClick={handleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      {isMenuActive && menu}
    </div>
  );
};
