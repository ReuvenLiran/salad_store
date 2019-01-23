import React from 'react';
import {
  ModalBody,
} from 'components';
import {
  CheckoutSummary,
} from '../../../index';
import OrderDetailsReadOnly from './OrderDetailsReadOnly';

const OrderSummaryModalBody = () => (
  <ModalBody>
    <CheckoutSummary />
    <br />
    <br />
    <OrderDetailsReadOnly />
    <br />
    <br />
    Thank you, your delivery is on its way.
  </ModalBody>
);

export default OrderSummaryModalBody;
