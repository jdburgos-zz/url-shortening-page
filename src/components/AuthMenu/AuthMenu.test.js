/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { AuthMenu } from './AuthMenu';

describe('AuthMenu', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<AuthMenu />, div);
  });
});
