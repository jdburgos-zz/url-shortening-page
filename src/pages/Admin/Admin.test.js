/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Admin } from './Admin';

describe('Admin', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Admin />, div);
  });
});
