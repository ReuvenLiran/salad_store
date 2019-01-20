export const STORE_DATA = 'STORE_DATA';
export const MOVE_ITEM_TO_CART = 'MOVE_ITEM_TO_CART';

export const getData = data => ({
  type: STORE_DATA,
  data,
});

export const moveToCart = name => (dispatch, getState) => {
  const {
    salad: {
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
