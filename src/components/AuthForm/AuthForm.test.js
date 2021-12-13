/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { AuthForm } from './AuthForm';

describe('AuthForm', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<AuthForm />, div);
  });
});
