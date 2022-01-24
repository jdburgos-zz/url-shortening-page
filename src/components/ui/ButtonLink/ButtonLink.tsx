/** React core **/
import React from 'react';

/** Components **/
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  className?: string;
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ className, to, children, onClick }) => {
  const customClasses = className || '';
  const classes = `btn ${customClasses}`.trim();

  return (
    <Link className={classes} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};
