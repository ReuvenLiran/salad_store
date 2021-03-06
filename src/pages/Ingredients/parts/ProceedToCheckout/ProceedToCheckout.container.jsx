import { connect } from 'react-redux';
import ProceedToCheckout from './ProceedToCheckout';

const mapStateToProps = (state) => {
  const {
    checkout: {
      itemsToCheckout,
    },
  } = state;
  return ({
    disabled: Object.keys(itemsToCheckout).length === 0,
  });
};
export default connect(mapStateToProps)(ProceedToCheckout);
