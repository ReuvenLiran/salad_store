import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'components';

const ModalCloseButton = (props) => {
  const {
    onClose,
  } = props;
  return (
    <Button
      className="modal-close"
      onClick={onClose}
    >
      <span aria-hidden="true">&times;</span>
    </Button>
  );
};

ModalCloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ModalCloseButton;
