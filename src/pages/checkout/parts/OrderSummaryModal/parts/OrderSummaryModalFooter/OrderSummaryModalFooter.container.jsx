import { connect } from 'react-redux';
import { closeModal } from 'actions';
import OrderSummaryModalFooter from './OrderSummaryModalFooter';

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(OrderSummaryModalFooter);
