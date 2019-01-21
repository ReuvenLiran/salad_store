import { connect } from 'react-redux';
import OrderDetails from './OrderDetails';

const mapStateToProps = state => ({
  name: state.salad.orderDetails.name,
  email: state.salad.orderDetails.email,
  notes: state.salad.orderDetails.notes,
});

export default connect(mapStateToProps)(OrderDetails);
