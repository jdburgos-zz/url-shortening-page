/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Login } from './Login';

describe('Login', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Login />, div);
  });
});
