import { Button } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from 'actions';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(closeModal());
    setTimeout(() => {
      props.history.push('/');
    }, 700);
  },
});

export default withRouter(connect(null, mapDispatchToProps)(Button));
