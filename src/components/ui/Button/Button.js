/** React core **/
import React from 'react';

/** Styles **/
import styles from './Button.module.scss';

export const Button = props => {
  const defaultClass = 'btn';
  const typeClass = props.type === 'semi-rectangle' ? `${styles['semi-rectangle']}` : '';
  const customClasses = props.className ? props.className : '';
  const variantClass = props.variant ? `${styles[props.variant]}` : '';
  const classes = `${defaultClass} ${variantClass} ${typeClass} ${customClasses}`.trim();

  return (
    <button className={classes} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
