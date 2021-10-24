/** React core **/
import React from 'react';

/** Styles **/
import styles from './Button.module.scss';

export const Button = props => {
  const defaultClass = 'btn';
  const className = props.type ? `${styles['semi-rectangle']}` : '';
  const classes = `${defaultClass} ${className}`.trim();

  return (
    <button className={classes} type={props.type}>
      {props.children}
    </button>
  );
};
