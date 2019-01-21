import React from 'react';
import {
  INGREDIENT_SHAPE,
} from 'types';

const Ingredient = (props) => {
  const {
    name,
    count,
    price,
  } = props;
  return (
    <li className="checkout-ingredient spread-columns">
      <span className="name">{name}</span>
      <span className="ingredient__price">{`${count} X ${price}$`}</span>
    </li>
  );
};

Ingredient.propTypes = {
  ...INGREDIENT_SHAPE,
};

export default Ingredient;
