import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import {
  Header,
} from 'components';
import Routes from './Routes';

class App extends PureComponent {
 static propTypes = {
   getData: PropTypes.func.isRequired,
 }

 componentDidMount() {
   const {
     getData,
   } = this.props;
   getData();
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
         position="bottom-left"
         effect="slide"
         timeout={2000}
         offset={80}
         stack={{
           spacing: 10,
           limit: 3,
         }}
       />
     </div>
   );
 }
}

export default App;
