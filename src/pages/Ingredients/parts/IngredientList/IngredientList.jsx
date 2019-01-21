import React from 'react';
import PropTypes from 'prop-types';
import {
  INGREDIENT_SHAPE,
} from 'types';
import { IngredientItem } from './IngredientItem';

const IngredientList = (props) => {
  const {
    ingredients,
  } = props;
  return (
    <ul>
      {ingredients.map(({ price, name }) => (
        <IngredientItem
          price={price}
          name={name}
        />
      ))}
    </ul>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape(INGREDIENT_SHAPE),
  ).isRequired,
};
export default IngredientList;
