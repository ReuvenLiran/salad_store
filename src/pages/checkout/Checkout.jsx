import React from 'react';
import PropTypes from 'prop-types';
import {
  INGREDIENT_SHAPE,
} from 'types';
import {
  CheckoutSummary,
  OrderDetails,
  OrderButton,
  OrderSummaryModal,
} from './parts';


const Checkout = (props) => {
  // const {
  //   summary = 3,
  // } = props;
  // const ingredients = Mock;
  // const summary = 3;
  return (
    <div className="page">
      <div className="spread-columns">
        <OrderDetails />
        <CheckoutSummary  />
      </div>
      <OrderButton />
      <OrderSummaryModal />
    </div>
  );
};

Checkout.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      ...INGREDIENT_SHAPE,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
  // itemToCheckout: PropTypes.arrayOf(
  //   PropTypes.string,
  // ).isRequired,
};
export default Checkout;
