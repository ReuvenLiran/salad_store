import { PrimButton } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  closeModal,
  clearModal,
  clearCheckout,
} from 'actions';
import {
  HOME_PAGE,
} from 'consts';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(closeModal());
    dispatch(clearModal());
    dispatch(clearCheckout());
    setTimeout(() => {
      props.history.push(HOME_PAGE);
    }, 700);
  },
});

export default withRouter(connect(null, mapDispatchToProps)(PrimButton));
