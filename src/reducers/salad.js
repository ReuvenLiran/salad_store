import {
  STORE_DATA,
  MOVE_ITEM_TO_CART,
  UPDATE_FIELD,
  CLOSE_MODAL,
  OPEN_MODAL,
} from 'actions';

const initalState = {
  data: [],
  itemsToCheckout: {},
  orderDetails: {
    firstName: '',
    lastName: '',
    notes: '',
  },
  isOpen: false,
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
    case OPEN_MODAL: {
      const {
        isOpen,
      } = action;
      return ({
        ...state,
        isOpen,
      });
    }
    case CLOSE_MODAL: {
      const {
        isOpen,
      } = action;
      return ({
        ...state,
        isOpen,
      });
    }
    default:
      return state;
  }
};
