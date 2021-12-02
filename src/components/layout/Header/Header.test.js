/** React core **/
import { render } from 'react-dom';
import React from 'react';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { Header } from './Header';

describe('Header', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div,
    );
  });
});
