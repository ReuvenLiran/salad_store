import { connect } from 'react-redux';
import {
  formatItemsToCheckout,
} from 'utils';
import IngredientList from './IngredientList';

const mapStateToProps = state => ({
  ingredients: formatItemsToCheckout(state),
});

export default connect(mapStateToProps, null)(IngredientList);
