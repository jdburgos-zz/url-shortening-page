/** React core **/
import { lazy, Suspense, useEffect, useState } from 'react';

/** Dependencies **/
import { Navigate, Route, Routes } from 'react-router-dom';

/** Components **/
import { MainContainer } from './components/layout/MainContainer';
import { SuspenseComponent } from './helpers/SuspenseComponent';

/** Actions **/
import { setUser } from './store/auth/auth.reducer';

/** Hooks **/
import { useAppDispatch, useAppSelector } from './hooks/react-redux';

/** Interfaces **/
import { IUser } from './interfaces/user.interface';

/** Styles **/
import './styles/styles.scss';

/** Pages **/
const Home = lazy(() => import('./pages/Home/Home'));
const Features = lazy(() => import('./pages/Features/Features'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const Resources = lazy(() => import('./pages/Resources/Resources'));
const Admin = lazy(() => import('./pages/Admin/Admin'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Auth = lazy(() => import('./pages/Auth/Auth'));

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user) as IUser;
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(user?.isLoggedIn);
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
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
              {isLogged ? <Navigate to="/" /> : <Auth />}
            </Suspense>
          }
        />
        <Route
          path="admin"
          element={
            <Suspense fallback={<SuspenseComponent />}>
              {isLogged ? <Admin /> : <Navigate to="/auth/login" />}
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
};

export default App;
