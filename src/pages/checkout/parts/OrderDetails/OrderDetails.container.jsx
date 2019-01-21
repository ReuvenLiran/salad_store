import { connect } from 'react-redux';
import {
  updateField,
} from 'actions';
import OrderDetails from './OrderDetails';

const mapDispatchToProps = dispatch => ({
  updateField: (name, value) => dispatch(updateField(name, value)),
});

const mapStateToProps = state => ({
  name: state.salad.orderDetails.name,
  email: state.salad.orderDetails.email,
  notes: state.salad.orderDetails.notes,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
