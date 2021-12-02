/** React core **/
import React from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';

/** Styles **/
import styles from './LinksList.module.scss';

export const LinksList = props => {
  const links = props.list.links.map((link, index) => (
    <li key={index} className={styles['links-list__item']}>
      <Link to={link.url} className={styles['links-list__link']}>
        {link.title}
      </Link>
    </li>
  ));

  return (
    <div className={styles['links-list']}>
      <h4 className={styles['links-list__title']}>{props.list.title}</h4>
      <ul className={styles['links-list__items']}>{links}</ul>
    </div>
  );
};
