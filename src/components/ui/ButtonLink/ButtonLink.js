/** React core **/
import React from 'react';

/** Components **/
import { Link } from 'react-router-dom';

export const ButtonLink = props => {
  const customClasses = props.className ? props.className : '';
  const classes = `btn ${customClasses}`.trim();

  return (
    <Link className={classes} to={props.to} onClick={props.onClick}>
      {props.children}
    </Link>
  );
};
