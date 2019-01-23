import { connect } from 'react-redux';
import {
  closeModal,
  clearModal,
  clearCheckout,
} from 'actions';
import CloseButton from './CloseButton';

const mapDispatchToProps = dispatch => ({
  onClose: () => {
    dispatch(closeModal());
    dispatch(clearModal());
    dispatch(clearCheckout());
  },
});

export default connect(null, mapDispatchToProps)(CloseButton);
