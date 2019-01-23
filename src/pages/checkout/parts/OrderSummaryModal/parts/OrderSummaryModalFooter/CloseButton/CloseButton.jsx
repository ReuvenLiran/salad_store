import React from 'react';
import PropTypes from 'prop-types';
import { PrimButton } from 'components';
import { withRouter } from 'react-router-dom';
import {
  HOME_PAGE,
} from 'consts';

const CloseButton = (props) => {
  const {
    onClose,
  } = props;
  const onClick = () => {
    onClose();
    setTimeout(() => {
      props.history.push(HOME_PAGE);
    }, 700);
  };
  return (
    <PrimButton
      onClick={onClick}
    >
      Close
    </PrimButton>
  );
};

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
export default withRouter(CloseButton);
