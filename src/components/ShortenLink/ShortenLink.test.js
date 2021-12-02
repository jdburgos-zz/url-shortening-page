/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { ShortenLink } from './ShortenLink';

describe('ShortenLink', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ShortenLink />, div);
  });
});
