/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Resources } from './Resources';

describe('Resources', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Resources />, div);
  });
});
