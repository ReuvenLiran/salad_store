import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBody,
} from 'components';
import {
  CheckoutSummary,
  // OrderDetails,
} from '../../../index';
import OrderDetails from './parts/OrderDetails.container';

const OrderSummaryModalBody = () => (
  <ModalBody>
    <CheckoutSummary />
    <br />
    <br />
    <OrderDetails />
    <br />
    <br />
    Thank you, your delivery is on its way.
  </ModalBody>
);

export default OrderSummaryModalBody;
