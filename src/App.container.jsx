import { connect } from 'react-redux';
import {
  getData as getDataAction,
} from 'actions';
import {
  getIngredientsAPI,
} from 'services';
import { withRouter } from 'react-router-dom';

import App from './App';

const getData = () => async (dispatch) => {
  const items = await getIngredientsAPI();
  return dispatch(getDataAction(items));
};

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
