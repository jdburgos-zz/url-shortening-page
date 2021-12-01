/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { ShortenForm } from './ShortenForm';

describe('ShortenForm', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ShortenForm />, div);
  });
});