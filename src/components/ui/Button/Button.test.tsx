/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { Button } from './Button';

describe('Button', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Button onClick={() => {}}>
        <div>Button</div>
      </Button>,
      div,
    );
  });
});
