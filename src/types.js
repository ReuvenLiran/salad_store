import PropTypes from 'prop-types';

export const INGREDIENT_SHAPE = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export const ORDER_DETAILS_SHAPE = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
};
