import React from 'react';
import {
  INGREDIENT_SHAPE,
} from 'types';

const IngredientItem = (props) => {
  const {
    name,
    count,
    price,
  } = props;
  const strPrice = `${count} X ${price}$`;
  return (
    <li className="list-item checkout-ingredient spread-columns">
      <span className="name">{name}</span>
      <span className="ingredient__price">{strPrice}</span>
    </li>
  );
};

IngredientItem.propTypes = {
  ...INGREDIENT_SHAPE,
};

export default IngredientItem;
