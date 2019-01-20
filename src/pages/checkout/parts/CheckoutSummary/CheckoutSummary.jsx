import React from 'react';
import PropTypes from 'prop-types';
import {
  SummaryLine,
  Ingredient,
} from './parts';

const CheckoutSummary = (props) => {
  const {
    summary,
    ingredients,
  } = props;

  return (
    <div className="checkout__summary">
      <ul>
        {ingredients.map(({ name, count, price }) => (
          <Ingredient
            count={count}
            price={price}
            name={name}
          />
        ))}
      </ul>
      <SummaryLine
        summary={summary}
      />
    </div>
  );
};

export default CheckoutSummary;
