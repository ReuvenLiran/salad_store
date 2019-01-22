export const UPDATE_FIELD = 'UPDATE_FIELD';
export const MOVE_ITEM_TO_CART = 'MOVE_ITEM_TO_CART';
export const CLEAR_CHECKOUT = 'CLEAR_CHECKOUT';

export const moveToCart = name => (dispatch, getState) => {
  const {
    checkout: {
      itemsToCheckout,
    },
  } = getState();
  const item = itemsToCheckout[name];
  let count = 1;
  if (item) {
    count = item + 1;
  }
  dispatch({
    type: MOVE_ITEM_TO_CART,
    name,
    count,
  });
};

export const updateField = (name, value) => ({
  type: UPDATE_FIELD,
  name,
  value,
});
export const clearCheckout = () => ({
  type: CLEAR_CHECKOUT,
});
