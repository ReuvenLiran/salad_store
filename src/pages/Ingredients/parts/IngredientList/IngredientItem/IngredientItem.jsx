import React from 'react';
import {
  INGREDIENT_SHAPE,
} from 'types';
import Alert from 'react-s-alert';
import AddToCart from './AddToCart';

const IngredientItem = (props) => {
  const {
    name,
    price,
  } = props;
  return (
    <li
      key={name}
      className="list-item ingredient-item"
    >
      <AddToCart name={name} />
      <div className="ingredient__text spread-columns">
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
