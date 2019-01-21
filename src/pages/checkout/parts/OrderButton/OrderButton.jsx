import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';

const OrderButton = (props) => {
  const {
    disabled,
    openModal,
  } = props;
  return (
    <Button
      disabled={disabled}
      className="btn order-button"
      onClick={openModal}
    >
      Order
    </Button>

  );
};

OrderButton.propTypes = {};

export default OrderButton;
