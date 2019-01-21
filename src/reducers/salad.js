import {
  STORE_DATA,
} from 'actions';

const initalState = {
  data: [],
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
    default:
      return state;
  }
};
