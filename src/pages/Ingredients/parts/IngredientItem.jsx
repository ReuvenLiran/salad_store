import React from 'react';
import PropTypes from 'prop-types';
import {
  INGREDIENT_SHAPE,
} from 'types';
import Alert from 'react-s-alert';
import {
  Button,
} from 'components';

const IngredientItem = (props) => {
  const {
    name,
    price,
    moveToCart,
  } = props;
  const onClick = (e) => {
    e.preventDefault();
    moveToCart(name);
    Alert.success(`<b>${name}</b> is added to your cart`, {
      position: 'bottom-left',
      effect: 'slide',
    });
  };
  return (
    <li
      key={name}
      className="ingredient-item"
    >
      <Button
        className="btn-checkout"
        onClick={onClick}
      >
        <i className="material-icons">
          add_circle_outline
          {/* add_shopping_cart */}
        </i>
      </Button>
      <div className="text">
        <span className="name">
          {name}
        </span>
        <span className="price">
          {`${price}$`}
        </span>
      </div>
    </li>
  );
};

IngredientItem.propTypes = {
  ...INGREDIENT_SHAPE,
};
export default IngredientItem;
