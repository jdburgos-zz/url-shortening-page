/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import { AuthForm } from './AuthForm';

describe('AuthForm', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <AuthForm
        btnText="submit"
        isLoading
        submit={(inputUserRef, inputPasswordRef) =>
          new Promise(resolve => {
            resolve();
          })
        }
        title="test form"
      />,
      div,
    );
  });
});
