import { connect } from 'react-redux';
import { getOrderDetails } from 'utils';
import OrderDetailsReadOnly from './OrderDetailsReadOnly';

const mapStateToProps = state => ({
  ...getOrderDetails(state),
});

export default connect(mapStateToProps)(OrderDetailsReadOnly);
