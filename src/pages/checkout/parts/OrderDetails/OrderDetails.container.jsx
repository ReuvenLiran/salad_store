import { connect } from 'react-redux';
import {
  updateField,
} from 'actions';
import OrderDetails from './OrderDetails';

const mapDispatchToProps = dispatch => ({
  updateField: (name, value) => dispatch(updateField(name, value)),
});

const mapStateToProps = state => ({
  lastName: state.salad.orderDetails.lastName,
  firstName: state.salad.orderDetails.firstName,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
