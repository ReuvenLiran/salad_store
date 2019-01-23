import React from 'react';
import {
  SummaryLine,
  IngredientList,
} from './parts';

const CheckoutSummary = () => (
  <div className="checkout-summary">
    <h6>
        Checkout Summary
    </h6>
    <hr />
    <IngredientList />
    <SummaryLine />
  </div>
);

export default CheckoutSummary;
