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
    <ModalHeader
      key="movie-modal-header"
    >
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
