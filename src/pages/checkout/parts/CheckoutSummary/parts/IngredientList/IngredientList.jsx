import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './parts/Ingredient';

const IngredientList = (props) => {
  const {
    ingredients,
  } = props;
  return (
    <ul>
      {ingredients.map(({ name, count, price }) => (
        <Ingredient
          count={count}
          price={price}
          name={name}
        />
      ))}
    </ul>
  );
};

IngredientList.propTypes = {
  // ingredients,
};
export default IngredientList;
