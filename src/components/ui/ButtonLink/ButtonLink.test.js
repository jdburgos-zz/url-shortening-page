/** React core **/
import { render } from 'react-dom';
import React from 'react';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { ButtonLink } from './ButtonLink';

describe('ButtonLink', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <ButtonLink to="/test" />
      </BrowserRouter>,
      div,
    );
  });
});
