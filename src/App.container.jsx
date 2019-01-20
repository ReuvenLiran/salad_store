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
  const data = await getIngredientsAPI();
  return dispatch(getDataAction(data));
};

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
});

const mapStateToProps = state => ({
  data: state.salad.data,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default connect(mapStateToProps, mapDispatchToProps)(App);
