/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { Pricing } from './Pricing';

describe('Pricing', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Pricing />, div);
  });
});
