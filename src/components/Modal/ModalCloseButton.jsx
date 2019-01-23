import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  PrimButton
} from 'components';

const ModalCloseButton = (props) => {
  const {
    onClose,
  } = props;
  return (
    <PrimButton
      onClick={onClose}
    >
      <span aria-hidden="true">&times;</span>
    </PrimButton>
  );
};

ModalCloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ModalCloseButton;
