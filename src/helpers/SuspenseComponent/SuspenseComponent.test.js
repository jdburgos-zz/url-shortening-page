/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { SuspenseComponent } from './SuspenseComponent';

describe('SuspenseComponent', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<SuspenseComponent />, div);
  });
});
