/** React core **/
import { render } from 'react-dom';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import Auth from './Auth';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({ url: '/auth' }),
}));

describe('Auth', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <Auth />
      </BrowserRouter>,
      div,
    );
  });
});
