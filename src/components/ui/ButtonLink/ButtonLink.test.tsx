/** React core **/
import { render } from 'react-dom';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { ButtonLink } from './ButtonLink';

describe('ButtonLink', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <ButtonLink to="/test">
          <div>ButtonLink</div>
        </ButtonLink>
      </BrowserRouter>,
      div,
    );
  });
});
