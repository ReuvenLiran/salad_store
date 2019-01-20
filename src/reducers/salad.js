import {
  STORE_DATA,
  MOVE_ITEM_TO_CART,
} from 'actions';

const initalState = {
  data: [],
  itemsToCheckout: {},
  // checked: new Set(),
};

export default (state = initalState, action) => {
  switch (action.type) {
    case STORE_DATA: {
      const { data } = action;
      return ({
        ...state,
        data,
      });
    }
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
    default:
      return state;
  }
};
