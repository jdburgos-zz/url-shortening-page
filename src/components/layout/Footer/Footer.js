/** React core **/
import React from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';

/** Components **/
import { FooterLinks } from '../../FooterLinks';
import { SocialLinks } from '../../SocialLinks';

/** Styles **/
import styles from './Footer.module.scss';
import { ButtonLink } from '../../ui/ButtonLink';

export const Footer = () => (
  <div className={styles.footer}>
    <div
      className={styles['footer__first-section']}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-boost-mobile.svg)` }}
    >
      <h3 className={styles['footer__first-section-title']}>Boost your links today</h3>
      <ButtonLink to="/features" className={styles['footer__first-section-btn']}>
        Get Started
      </ButtonLink>
    </div>
    <div className={styles['footer__second-section']}>
      <Link to="/" className={styles['footer__second-section-logo']}>
        <img src={`${process.env.PUBLIC_URL}/images/logo-white.svg`} alt="Shortly" />
      </Link>
      <FooterLinks />
      <SocialLinks />
    </div>
  </div>
);
