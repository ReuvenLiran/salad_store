import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Route, Switch } from 'react-router-dom';
import Alert from 'react-s-alert';
import {
  Header,
} from 'components';
import LandingPage from './pages/landing/Landing';

const Ingredients = React.lazy(() => import('./pages/Ingredients'));
const Checkout = React.lazy(() => import('./pages/checkout'));

// const IngredientsWrapper = () => (
//   <React.Suspense fallback={<div>Loading...</div>}>
//     <Ingredients />
//   </React.Suspense>
// );

function waitingComponent(Comp) {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Comp {...props} />
    </React.Suspense>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      data,
    } = this.props;
    return (
      <div className="App">
        <Header>
          La Salad
        </Header>
        <Switch>
          <Route
            exact
            path="/ingredients"
            component={waitingComponent(Ingredients)}
          />
          <Route
            exact
            path="/checkout"
            component={waitingComponent(Checkout)}
          />
          <Route
            exact
            path="/"
            component={LandingPage}
          />
        </Switch>
        <Alert
          html
          timeout={2000}
          offset={20}
          stack={{ limit: 3 }}
        />
      </div>
    );
  }
}

export default App;
