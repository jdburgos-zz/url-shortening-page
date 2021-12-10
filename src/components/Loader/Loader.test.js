/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Loader } from './Loader';

describe('Loader', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Loader />, div);
  });
});
