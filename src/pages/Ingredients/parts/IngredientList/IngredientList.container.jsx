import { connect } from 'react-redux';
import IngredientList from './IngredientList';

const mapStateToProps = state => ({
  ingredients: state.salad.data.items,
});

export default connect(mapStateToProps)(IngredientList);
