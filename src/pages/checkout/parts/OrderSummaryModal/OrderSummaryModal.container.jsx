import { connect } from 'react-redux';
import {
  closeModal,
} from 'actions';
import OrderSummaryModal from './OrderSummaryModal';

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});


const mapStateToProps = state => ({
  isOpen: state.salad.isOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryModal);
