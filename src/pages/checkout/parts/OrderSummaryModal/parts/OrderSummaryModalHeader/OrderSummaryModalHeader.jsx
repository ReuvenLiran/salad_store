import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalHeader,
  ModalCloseButton,
} from 'components';

const OrderSummaryModalHeader = (props) => {
  const {
    closeModal,
  } = props;
  return (
    <ModalHeader>
      <h5>Order Summary</h5>
      <ModalCloseButton
        onClose={closeModal}
      />
    </ModalHeader>
  );
};

OrderSummaryModalHeader.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default OrderSummaryModalHeader;
