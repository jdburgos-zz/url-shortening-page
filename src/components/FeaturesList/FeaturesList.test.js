/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import { FeaturesList } from './FeaturesList';

describe('FeaturesList', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<FeaturesList />, div);
  });
});
