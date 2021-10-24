/** React core **/
import React from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';
import { ButtonLink } from '../ui/ButtonLink';

/** Styles **/
import styles from './AuthMenu.module.scss';

export const AuthMenu = () => (
  <div className={styles['auth-menu__container']}>
    <Link to="/auth/login" className={styles['auth-menu__item']}>
      Login
    </Link>
    <ButtonLink to="/auth/signup">Signup</ButtonLink>
  </div>
);
