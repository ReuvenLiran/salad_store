import { connect } from 'react-redux';
import {
  openModal,
} from 'actions';
import OrderButton from './OrderButton';

const getDisabled = (state) => {
  const {
    checkout: {
      orderDetails: {
        name,
        email,
      },
    },
  } = state;
  const disabled = !name || !email;
  return disabled;
};

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
});

const mapStateToProps = state => ({
  disabled: getDisabled(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
