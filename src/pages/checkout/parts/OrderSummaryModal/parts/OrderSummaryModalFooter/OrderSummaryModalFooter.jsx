import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalFooter,
} from 'components';
import CloseButton from './parts/CloseButton';

const OrderSummaryModalFooter = (props) => {
  const {
    closeModal,
  } = props;
  return (
    <ModalFooter key="movie-modal-footer">
      <CloseButton
        onClick={closeModal}
      >
        Close
      </CloseButton>
    </ModalFooter>
  );
};

OrderSummaryModalFooter.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default OrderSummaryModalFooter;
