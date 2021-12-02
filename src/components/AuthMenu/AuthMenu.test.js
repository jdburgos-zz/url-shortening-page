/** React core **/
import { render } from 'react-dom';
import React from 'react';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { AuthMenu } from './AuthMenu';

describe('AuthMenu', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <AuthMenu />
      </BrowserRouter>,
      div,
    );
  });
});
