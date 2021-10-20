/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { NotFound } from './NotFound';

describe('NotFound', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<NotFound />, div);
  });
});
