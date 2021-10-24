/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

export const Input = props => {
  return <input onChange={props.onChange} className={`${styles.input}`} {...props.input} />;
};
