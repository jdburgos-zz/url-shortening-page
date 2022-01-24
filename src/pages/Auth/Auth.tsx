/** React core **/
import { Fragment, lazy, Suspense } from 'react';

/** Dependencies **/
import { Navigate, Route, Routes } from 'react-router-dom';

/** Components **/
import { SuspenseComponent } from '../../helpers/SuspenseComponent';

/** Pages **/
const Login = lazy(() => import('../Login/Login'));
const SignUp = lazy(() => import('../SignUp/SignUp'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

export default function Auth() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route
          path="login"
          element={
            <Suspense fallback={<SuspenseComponent />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={<SuspenseComponent />}>
              <SignUp />
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
    </Fragment>
  );
}
