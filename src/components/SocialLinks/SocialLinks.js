/** React core **/
import React from 'react';

/** Styles **/
import styles from './SocialLinks.module.scss';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    img: 'facebook',
    url: 'https://www.facebook.com',
  },
  {
    name: 'Twitter',
    img: 'twitter',
    url: 'https://www.twitter.com',
  },
  {
    name: 'Pinterest',
    img: 'pinterest',
    url: 'https://www.pinterest.com',
  },
  {
    name: 'Instagram',
    img: 'instagram',
    url: 'https://www.instagram.com',
  },
];

const links = SOCIAL_LINKS.map((link, index) => (
  <a key={index} href={link.url} target="_blank" rel="noreferrer">
    <img
      src={`${process.env.PUBLIC_URL}/images/${link.img}.svg`}
      alt={link.name}
      title={link.name}
    />
  </a>
));

export const SocialLinks = () => <div className={styles}>{links}</div>;
