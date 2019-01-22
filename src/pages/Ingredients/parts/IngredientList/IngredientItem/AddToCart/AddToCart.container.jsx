import { connect } from 'react-redux';
import {
  moveToCart,
} from 'actions';

import AddToCart from './AddToCart';

const mapDispatchToProps = dispatch => ({
  moveToCart: name => dispatch(moveToCart(name)),
});

export default connect(null, mapDispatchToProps)(AddToCart);
