import React from 'react';
import PropTypes from 'prop-types';

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

export default Ingredient;
