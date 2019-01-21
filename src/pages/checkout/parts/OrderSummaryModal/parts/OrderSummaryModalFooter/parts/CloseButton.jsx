import { Button } from 'components';
import { connect } from 'react-redux';
import { closeModal } from 'actions';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(Button);
