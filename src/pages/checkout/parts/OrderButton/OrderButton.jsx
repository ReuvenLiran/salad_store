import React from 'react';
import PropTypes from 'prop-types';
import { PrimButton } from 'components';

const OrderButton = (props) => {
  const {
    disabled,
    openModal,
  } = props;
  return (
    <PrimButton
      disabled={disabled}
      onClick={openModal}
    >
      Order
    </PrimButton>
  );
};

OrderButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default OrderButton;
