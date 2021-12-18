/** React core **/
import { lazy, Suspense } from 'react';

/** Dependencies **/
import { Route, Routes } from 'react-router-dom';

/** Styles **/
import './styles/styles.scss';

/** Components **/
import { MainContainer } from './components/layout/MainContainer';
import { SuspenseComponent } from './helpers/SuspenseComponent';

/** Pages **/
const Home = lazy(() => import('./pages/Home/Home'));
const Features = lazy(() => import('./pages/Features/Features'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const Resources = lazy(() => import('./pages/Resources/Resources'));
const Admin = lazy(() => import('./pages/Admin/Admin'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Auth = lazy(() => import('./pages/Auth/Auth'));

const App = () => (
  <MainContainer>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<SuspenseComponent />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="features"
        element={
          <Suspense fallback={<SuspenseComponent />}>
            <Features />
          </Suspense>
        }
      />
      <Route
        path="pricing"
        element={
          <Suspense fallback={<SuspenseComponent />}>
            <Pricing />
          </Suspense>
        }
      />
      <Route
        path="resources"
        element={
          <Suspense fallback={<SuspenseComponent />}>
            <Resources />
          </Suspense>
        }
      />
      <Route
        path="auth/*"
        element={
          <Suspense fallback={<SuspenseComponent />}>
            <Auth />
          </Suspense>
        }
      />
      <Route
        path="admin"
        element={
          <Suspense fallback={<SuspenseComponent />}>
            <Admin />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<SuspenseComponent />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  </MainContainer>
);
export default App;
