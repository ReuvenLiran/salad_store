import { connect } from 'react-redux';
import {
  closeModal,
} from 'actions';
import OrderSummaryModalHeader from './OrderSummaryModalHeader';

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(OrderSummaryModalHeader);
