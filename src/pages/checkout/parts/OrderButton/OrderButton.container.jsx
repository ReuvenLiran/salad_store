import { connect } from 'react-redux';
import {
  openModal,
} from 'actions';
import OrderButton from './OrderButton';

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
});

const mapStateToProps = (state) => {
  const {
    salad: {
      orderDetails: {
        name,
        email,
      },
    },
  } = state;
  const disabled = !name || !email;
  return ({
    disabled,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
