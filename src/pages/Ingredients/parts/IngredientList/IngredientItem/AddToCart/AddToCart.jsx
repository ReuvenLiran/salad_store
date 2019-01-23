import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import {
  Button,
} from 'components';

const AddToCart = (props) => {
  const {
    name,
    moveToCart,
  } = props;
  const onClick = (e) => {
    e.preventDefault();
    moveToCart(name);
    Alert.success(`<b>${name}</b> was added to your cart`);
  };
  return (
    <Button
      className="add-to-cart"
      onClick={onClick}
    >
      <i className="material-icons">
          add_circle_outline
        {/* add_shopping_cart */}
      </i>
    </Button>
  );
};

AddToCart.propTypes = {
  name: PropTypes.string.isRequired,
  moveToCart: PropTypes.func.isRequired,
};
export default AddToCart;
