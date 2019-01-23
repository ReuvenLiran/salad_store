import { connect } from 'react-redux';
import IngredientList from './IngredientList';

const mapStateToProps = state => ({
  ingredients: state.salad.items,
});

export default connect(mapStateToProps)(IngredientList);
