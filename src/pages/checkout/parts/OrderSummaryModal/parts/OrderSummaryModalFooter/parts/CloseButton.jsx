import { Button } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from 'actions';
import {
  HOME_PAGE,
} from 'consts';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(closeModal());
    setTimeout(() => {
      props.history.push(HOME_PAGE);
    }, 700);
  },
});

export default withRouter(connect(null, mapDispatchToProps)(Button));
