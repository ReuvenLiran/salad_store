import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HOME_PAGE,
  CHECKOUT_PAGE,
  INGREDIENTS_PAGE,
} from 'consts';

const Ingredients = React.lazy(() => import('./pages/Ingredients'));
const Checkout = React.lazy(() => import('./pages/checkout'));
const LandingPage = React.lazy(() => import('./pages/landing/Landing'));

function waitingComponent(Comp) {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Comp {...props} />
    </React.Suspense>
  );
}

const Routes = () => (
  <Switch>
    <Route
      exact
      path={INGREDIENTS_PAGE}
      component={waitingComponent(Ingredients)}
    />
    <Route
      exact
      path={CHECKOUT_PAGE}
      component={waitingComponent(Checkout)}
    />
    <Route
      exact
      path={HOME_PAGE}
      component={waitingComponent(LandingPage)}
    />
  </Switch>
);

export default Routes;
