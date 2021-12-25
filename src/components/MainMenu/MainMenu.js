/** React core **/
import React, { useState } from 'react';

/** Dependencies **/
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/** Components **/
import { AuthMenu } from '../AuthMenu';

/** Styles **/
import styles from './MainMenu.module.scss';
import { authActions } from '../../store/auth/auth.reducer';

export const MainMenu = () => {
  const [isMenuActive, toggleMenu] = useState(false);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenu = () => {
    toggleMenu(prevState => !prevState);
  };

  const HandleLogout = () => {
    handleMenu();
    dispatch(authActions.logout(null));
    localStorage.removeItem('user');
    navigate('/');
  };

  const logout = (
    <div className={styles['main-menu__item']} onClick={HandleLogout}>
      logout
    </div>
  );

  const content = user?.isLoggedIn ? logout : <AuthMenu onClick={handleMenu} />;
  const admin = (
    <Link to="/admin" className={styles['main-menu__item']} onClick={handleMenu}>
      Dashboard
    </Link>
  );

  const menu = (
    <div className={styles['main-menu__container']}>
      <Link to="/features" className={styles['main-menu__item']} onClick={handleMenu}>
        Features
      </Link>
      <Link to="/pricing" className={styles['main-menu__item']} onClick={handleMenu}>
        Pricing
      </Link>
      <Link to="/resources" className={styles['main-menu__item']} onClick={handleMenu}>
        Resources
      </Link>
      {user?.isLoggedIn && admin}
      {content}
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
