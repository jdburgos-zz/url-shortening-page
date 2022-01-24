/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

type InputProps = {
  className?: string;
  input: {
    ref: React.RefObject<HTMLInputElement>;
    placeholder: string;
    type: string;
  };
};

export const Input: React.FC<InputProps> = ({ className, input }) => {
  const customClasses = className || '';
  const classes = `${styles.input} ${customClasses}`.trim();

  return <input className={classes} {...input} />;
};
