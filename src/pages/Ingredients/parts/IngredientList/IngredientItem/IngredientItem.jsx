import React from 'react';
import {
  INGREDIENT_SHAPE,
} from 'types';
import AddToCart from './AddToCart';

const IngredientItem = (props) => {
  const {
    name,
    price,
  } = props;
  return (
    <li
      className="list-item ingredient-item"
    >
      <AddToCart name={name} />
      <div className="ingredient__text spread-columns align-items-center ">
        <span className="ingredient__name">
          {name}
        </span>
        <span className="ingredient__price">
          {price}
        </span>
      </div>
    </li>
  );
};

IngredientItem.propTypes = {
  ...INGREDIENT_SHAPE,
};
export default IngredientItem;
