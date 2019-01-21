import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
} from 'components';
import {
  OrderSummaryModalHeader,
  OrderSummaryModalFooter,
  OrderSummaryModalBody,
} from './parts';

const OrderSummaryModal = (props) => {
  const {
    isOpen,
    closeModal,
  } = props;
  return (
    <Modal
      onClose={closeModal}
      isOpen={isOpen}
      className="movie-modal"
    >
      <OrderSummaryModalHeader />
      <OrderSummaryModalBody />
      <OrderSummaryModalFooter />
    </Modal>
  );
};

OrderSummaryModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default OrderSummaryModal;
