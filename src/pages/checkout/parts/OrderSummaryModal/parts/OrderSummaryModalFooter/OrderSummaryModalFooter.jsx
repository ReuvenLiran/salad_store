import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalFooter,
} from 'components';
import CloseButton from './parts/CloseButton';

const OrderSummaryModalFooter = props => (
  <ModalFooter key="movie-modal-footer">
    <CloseButton>
        Close
    </CloseButton>
  </ModalFooter>
);

export default OrderSummaryModalFooter;
