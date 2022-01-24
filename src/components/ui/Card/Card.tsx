/** React core **/
import React from 'react';

/** Styles **/
import styles from './Card.module.scss';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
  const customClasses = className || '';
  const classes = `${styles.card} ${customClasses}`.trim();

  return <div className={classes}>{children}</div>;
};
