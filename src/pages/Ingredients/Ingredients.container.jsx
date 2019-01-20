import { connect } from 'react-redux';
import Ingredients from './Ingredients';

const mapStateToProps = state => ({
  data: state.salad.data,
});

export default connect(mapStateToProps, null)(Ingredients);
