/** React core **/
import React from 'react';

/** Dependencies **/
import { Link } from 'react-router-dom';

/** Styles **/
import styles from './LinksList.module.scss';

export const LinksList = props => {
  const links = props.list.links.map((link, index) => (
    <li key={index}>
      <Link to={link.url}>{link.title}</Link>
    </li>
  ));

  return (
    <div className={styles}>
      <h4>{props.list.title}</h4>
      <ul>{links}</ul>
    </div>
  );
};
