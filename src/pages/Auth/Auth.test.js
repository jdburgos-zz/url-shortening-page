/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Auth } from './Auth';

describe('Auth', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Auth />, div);
  });
});
