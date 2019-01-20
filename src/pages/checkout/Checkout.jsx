import React from 'react';
import PropTypes from 'prop-types';
import {
  INGREDIENT_SHAPE,
} from 'types';
import {
  CheckoutSummary,
  OrderDetails,
} from './parts';

const Mock = [
  {
    name: 'banana',
    count: 2,
    price: 0.3,
  }, {
    name: 'apple',
    count: 3,
    price: 1.3,
  },
];

const Fields = (props) => {

};


const Checkout = (props) => {
  // const {
  //   summary = 3,
  // } = props;
  const ingredients = Mock;
  const summary = 3;
  return (
    <div className="page">
      <div className="spread-columns">
        <OrderDetails />
        <CheckoutSummary
          ingredients={ingredients}
          summary={summary}
        />
      </div>
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
