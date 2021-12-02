/** React core **/
import { render } from 'react-dom';
import React from 'react';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { MainContainer } from './MainContainer';

describe('MainContainer', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>,
      div,
    );
  });
});