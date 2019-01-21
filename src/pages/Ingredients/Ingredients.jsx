import React from 'react';
import {
  IngredientList,
  ProceedToCheckout,
} from './parts';

const Ingredients = () => (
  <div className="page">
    <IngredientList />
    <ProceedToCheckout />
  </div>
);

export default Ingredients;
