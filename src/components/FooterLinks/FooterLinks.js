/** React core **/
import React from 'react';

/** Components **/
import { LinksList } from '../LinksList';

/** Styles **/
import styles from './FooterLinks.module.scss';

const LINKS_LIST = [
  {
    title: 'Features',
    links: [
      {
        title: 'Link Shortening',
        url: '/features/link-shortening',
      },
      {
        title: 'Branded Links',
        url: '/features/branded-links',
      },
      {
        title: 'Analytics',
        url: '/features/analytics',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Blog',
        url: '/resources/blog',
      },
      {
        title: 'Developers',
        url: '/resources/developers',
      },
      {
        title: 'Support',
        url: '/resources/support',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        title: 'About',
        url: '/company/about',
      },
      {
        title: 'Our Team',
        url: '/company/our-team',
      },
      {
        title: 'Careers',
        url: '/company/careers',
      },
      {
        title: 'Contact',
        url: '/company/contact',
      },
    ],
  },
];

const content = LINKS_LIST.map((list, index) => <LinksList key={index} list={list} />);

export const FooterLinks = () => <div className={styles['footer-links']}>{content}</div>;
