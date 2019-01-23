import {
  STORE_DATA,
} from 'actions';

const initalState = {
  items: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case STORE_DATA: {
      const { items } = action;
      return ({
        ...state,
        items,
      });
    }
    default:
      return state;
  }
};
