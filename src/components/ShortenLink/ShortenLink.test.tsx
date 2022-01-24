/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { ShortenLink } from './ShortenLink';

describe('ShortenLink', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ShortenLink link={{ shortenLink: 'asdasd', url: 'asdasd' }} />, div);
  });
});
