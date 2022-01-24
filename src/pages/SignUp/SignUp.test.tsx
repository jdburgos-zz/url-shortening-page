/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import SignUp from './SignUp';

describe('SignUp', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<SignUp />, div);
  });
});
