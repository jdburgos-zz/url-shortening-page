/** React core **/
import React from 'react';

/** Components **/
import { ShortenLink } from '../ShortenLink';

/** Styles **/
import styles from './ShortenLinks.module.scss';

export const ShortenLinks = ({ links }) => {
  const content = links.map((link, index) => <ShortenLink key={index} link={link} />);

  return <div className={styles['shorten-links']}>{content}</div>;
};
