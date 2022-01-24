/** React core **/
import { render } from 'react-dom';

/** Components **/
import { ShortenLinks } from './ShortenLinks';

describe('ShortenLinks', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(<ShortenLinks links={[]} />, div);
  });
});
