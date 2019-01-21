import React, { Component } from 'react';
import autobind from 'react-autobind';
import Alert from 'react-s-alert';
import {
  Header,
} from 'components';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="App">
        <Header>
          La Salad
        </Header>
        <Routes />
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
