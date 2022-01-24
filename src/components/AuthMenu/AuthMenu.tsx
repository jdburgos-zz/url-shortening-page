/** React core **/
import React from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';

/** Components  **/
import { ButtonLink } from '../ui';

/** Styles **/
import styles from './AuthMenu.module.scss';

type AuthMenuProps = {
  onClick: () => void;
};

export const AuthMenu: React.FC<AuthMenuProps> = ({ onClick }) => (
  <div className={styles['auth-menu__container']}>
    <Link to="/auth/login" className={styles['auth-menu__item']} onClick={onClick}>
      Login
    </Link>
    <ButtonLink to="/auth/signup" className={styles['auth-menu__btn']} onClick={onClick}>
      Sign Up
    </ButtonLink>
  </div>
);
