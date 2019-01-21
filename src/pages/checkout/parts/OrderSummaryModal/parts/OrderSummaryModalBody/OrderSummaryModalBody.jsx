import React from 'react';
import {
  ModalBody,
} from 'components';
import {
  CheckoutSummary,
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
