import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBody,
} from 'components';
import {
  CheckoutSummary,
} from '../../../index';

const OrderSummaryModalBody = (props) => {
  const {
    prop,
  } = props;
  return (
    <ModalBody>
      <CheckoutSummary />
    </ModalBody>
  );
};

// OrderSummaryModalBody.propTypes = {
// };
export default OrderSummaryModalBody;
