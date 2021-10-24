/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { FooterLinks } from './FooterLinks';

describe('FooterLinks', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<FooterLinks />, div);
  });
});
