/** React core **/
import React from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';

/** Components **/
import { MainMenu } from '../../MainMenu';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles['header__logo']}>
      <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Shortly" />
    </Link>
    <MainMenu />
  </header>
);
