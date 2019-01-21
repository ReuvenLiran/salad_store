import { connect } from 'react-redux';
import { getOrderDetails } from 'utils';
import OrderDetails from './OrderDetails';

const mapStateToProps = state => ({
  ...getOrderDetails(state),
});

export default connect(mapStateToProps)(OrderDetails);
