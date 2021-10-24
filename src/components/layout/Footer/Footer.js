/** React core **/
import React from 'react';

/** Components **/
import { Button } from '../../ui/Button';
import { FooterLinks } from '../../FooterLinks';
import { SocialLinks } from '../../SocialLinks';

/** Styles **/
import styles from './Footer.module.scss';

export const Footer = () => (
  <div className={styles.footer}>
    <div>
      <h3>Boost your links today</h3>
      <Button>Get Started</Button>
    </div>
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/logo-white.svg`} alt="Shortly" />
      <FooterLinks />
      <SocialLinks />
    </div>
  </div>
);
