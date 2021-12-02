/** React core **/
import { render } from 'react-dom';
import React from 'react';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { FooterLinks } from './FooterLinks';

describe('FooterLinks', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <FooterLinks />
      </BrowserRouter>,
      div,
    );
  });
});
