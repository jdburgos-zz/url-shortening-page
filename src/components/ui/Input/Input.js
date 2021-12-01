/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

export const Input = props => {
  const customClasses = props.className ? props.className : '';
  const classes = `${styles.input} ${customClasses}`.trim();

  return <input onChange={props.onChange} className={classes} {...props.input} />;
};
