/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Home } from './Home';

describe('Home', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Home />, div);
  });
});
