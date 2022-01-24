/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Admin from './Admin';

describe('Admin', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Admin />, div);
  });
});
