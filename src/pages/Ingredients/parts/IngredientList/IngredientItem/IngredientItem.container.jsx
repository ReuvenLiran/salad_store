import { connect } from 'react-redux';
import {
  moveToCart,
} from 'actions';

import IngredientItem from './IngredientItem';

const mapDispatchToProps = dispatch => ({
  moveToCart: name => dispatch(moveToCart(name)),
});

export default connect(null, mapDispatchToProps)(IngredientItem);
