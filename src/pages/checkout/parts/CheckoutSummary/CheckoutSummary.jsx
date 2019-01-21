import React from 'react';
import PropTypes from 'prop-types';
import {
  SummaryLine,
  Ingredient,
  IngredientList,
} from './parts';

const CheckoutSummary = (props) => {
  const {
    summary,
    ingredients,
  } = props;

  return (
    <div className="checkout__summary">
      <h6>
        Checkout Summary
      </h6>
      <hr />
      <IngredientList />

      <SummaryLine
        summary={summary}
      />
    </div>
  );
};

export default CheckoutSummary;

// <ul>
//         {ingredients.map(({ name, count, price }) => (
//           <Ingredient
//             count={count}
//             price={price}
//             name={name}
//           />
//         ))}
//       </ul>
