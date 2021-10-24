/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { LinksList } from './LinksList';

describe('LinksList', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<LinksList />, div);
  });
});
