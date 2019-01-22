import {
  MOVE_ITEM_TO_CART,
  UPDATE_FIELD,
  CLEAR_CHECKOUT,
} from 'actions';

const initalState = {
  itemsToCheckout: {},
  orderDetails: {
    name: '',
    email: '',
    notes: '',
  },
};

export default (state = initalState, action) => {
  switch (action.type) {
    case MOVE_ITEM_TO_CART: {
      const {
        name,
        count,
      } = action;
      const { itemsToCheckout } = state;
      return ({
        ...state,
        itemsToCheckout:
        { ...itemsToCheckout, [name]: count },
      });
    }
    case UPDATE_FIELD: {
      const {
        name,
        value,
      } = action;
      return ({
        ...state,
        orderDetails:
        { ...state.orderDetails, [name]: value },
      });
    }
    case CLEAR_CHECKOUT:
      return initalState;
    default:
      return state;
  }
};
