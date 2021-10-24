/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { SocialLinks } from './SocialLinks';

describe('SocialLinks', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<SocialLinks />, div);
  });
});
