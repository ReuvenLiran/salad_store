import React from 'react';
import PropTypes from 'prop-types';
import {
  INGREDIENT_SHAPE,
} from 'types';

const Ingredient = (props) => {
  const {
    name, count, price,
  } = props;
  return (
    <li className="checkout-ingredient spread-columns">
      <span className="name">{name}</span>
      <span className="ingredient__price">{`${count} X ${price}$`}</span>
    </li>
  );
};

const SummaryLine = (props) => {
  const { summary } = props;
  return (
    <div>
      <hr />
      <h6>Summary:</h6>
      <span>{summary}</span>
    </div>
  );
};

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


const Checkout = (props) => {
  // const {
  //   summary = 3,
  // } = props;
  const ingredients = Mock;
  const summary = 3;
  return (
    <div className="page">
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
