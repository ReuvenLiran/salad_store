export const STORE_DATA = 'STORE_DATA';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const MOVE_ITEM_TO_CART = 'MOVE_ITEM_TO_CART';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

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


export const updateField = (name, value) => ({
  type: UPDATE_FIELD,
  name,
  value,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  isOpen: false,
});

export const openModal = () => ({
  type: OPEN_MODAL,
  isOpen: true,
});
