/** React core **/
import React from 'react';

export const Button = props => (
  <button className="btn" type={props.type}>
    {props.children}
  </button>
);
