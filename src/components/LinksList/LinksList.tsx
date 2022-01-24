/** React core **/
import React from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';

/** Interfaces **/
import { ILink } from '../../interfaces/link.interface';

/** Styles **/
import styles from './LinksList.module.scss';

type LinksListProps = {
  list: ILink;
};

export const LinksList: React.FC<LinksListProps> = ({ list }) => {
  const links = list.links.map((link, index) => (
    <li key={index} className={styles['links-list__item']}>
      <Link to={link.url} className={styles['links-list__link']}>
        {link.title}
      </Link>
    </li>
  ));

  return (
    <div className={styles['links-list']}>
      <h4 className={styles['links-list__title']}>{list.title}</h4>
      <ul className={styles['links-list__items']}>{links}</ul>
    </div>
  );
};
