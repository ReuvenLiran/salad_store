import { connect } from 'react-redux';
import {
  updateField,
} from 'actions';
import { getOrderDetails } from 'utils';
import OrderDetails from './OrderDetails';

const mapDispatchToProps = dispatch => ({
  updateField: (name, value) => dispatch(updateField(name, value)),
});

const mapStateToProps = state => ({
  ...getOrderDetails(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
