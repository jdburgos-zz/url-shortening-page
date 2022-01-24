/** React core **/
import { render } from 'react-dom';

/** Dependencies **/
import { BrowserRouter } from 'react-router-dom';

/** Components **/
import { MainContainer } from './MainContainer';

describe('MainContainer', () => {
  test('should renders without crashing', () => {
    const div = document.createElement('div');

    render(
      <BrowserRouter>
        <MainContainer>
          <div>MainContainer</div>
        </MainContainer>
      </BrowserRouter>,
      div,
    );
  });
});
