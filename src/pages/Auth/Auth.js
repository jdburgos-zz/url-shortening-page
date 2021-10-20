/** React core **/
import React, { Fragment } from 'react';

/** Dependencies **/
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

/** Components **/
import { Login } from '../Login';
import { SignUp } from '../SignUp';
import { NotFound } from '../NotFound';

export const Auth = () => {
  const match = useRouteMatch();

  return (
    <Fragment>
      <Switch>
        <Route path={match.path} exact>
          <Redirect to={`${match.path}/login`} />
        </Route>
        <Route path={`${match.path}/login`}>
          <Login />
        </Route>
        <Route path={`${match.path}/signup`}>
          <SignUp />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
};
