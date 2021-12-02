/** Dependencies **/
import { Redirect, Route, Switch } from 'react-router-dom';

/** Styles **/
import './styles/styles.scss';

/** Components **/
import { MainContainer } from './components/layout/MainContainer';

/** Pages **/
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';
import { Resources } from './pages/Resources';
import { Admin } from './pages/Admin';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';

const App = () => (
  <MainContainer>
    <Switch>
      <Route path="/url-shortening-page" exact>
        <Home />
      </Route>
      <Route path="/" exact>
        <Redirect to="/url-shortening-page" />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
      <Route path="/pricing">
        <Pricing />
      </Route>
      <Route path="/resources">
        <Resources />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </MainContainer>
);

export default App;
