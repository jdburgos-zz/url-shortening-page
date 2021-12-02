/** React core **/
import React from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';
import { ButtonLink } from '../ui/ButtonLink';

/** Styles **/
import styles from './AuthMenu.module.scss';

export const AuthMenu = props => (
  <div className={styles['auth-menu__container']}>
    <Link to="/auth/login" className={styles['auth-menu__item']} onClick={props.onClick}>
      Login
    </Link>
    <ButtonLink to="/auth/signup" className={styles['auth-menu__btn']} onClick={props.onClick}>
      Sign Up
    </ButtonLink>
  </div>
);
