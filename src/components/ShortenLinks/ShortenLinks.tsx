/** React core **/
import React from 'react';

/** Components **/
import { ShortenLink } from '../ShortenLink';

/** Interfaces **/
import { IShortenLink } from '../../interfaces/shorten-link.interface';

/** Styles **/
import styles from './ShortenLinks.module.scss';

type ShortenLinksProps = {
  links: IShortenLink[];
};

export const ShortenLinks: React.FC<ShortenLinksProps> = ({ links }) => {
  const linksUpdated = [...links].reverse();
  const content = linksUpdated.map((link, index) => <ShortenLink key={index} link={link} />);

  return <div className={styles['shorten-links']}>{content}</div>;
};
