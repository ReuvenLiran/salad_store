import React from 'react';
import {
  CheckoutSummary,
  OrderDetails,
  OrderButton,
  OrderSummaryModal,
} from './parts';

const Checkout = () => (
  <div className="checkout-page page">
    <div className="spread-columns">
      <OrderDetails />
      <CheckoutSummary />
    </div>
    <OrderButton />
    <OrderSummaryModal />
  </div>
);

export default Checkout;
