/** React core **/
import React from 'react';

/** Components **/
import { Link } from 'react-router-dom';

export const ButtonLink = props => (
  <Link className="btn" to={props.to}>
    {props.children}
  </Link>
);
