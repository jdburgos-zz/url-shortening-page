/** React core **/
import ReactDOM from 'react-dom';

/** Dependencies **/
import { useRef } from 'react';

/** Components **/
import { Input } from './Input';

describe('Input', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');
    const inputUserRef = useRef<HTMLInputElement>(null);

    ReactDOM.render(
      <Input
        input={{
          ref: inputUserRef,
          placeholder: 'User',
          type: 'text',
        }}
      />,
      div,
    );
  });
});
