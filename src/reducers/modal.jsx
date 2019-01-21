import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from 'actions';

const initalState = {
  isOpen: false,
};

const toggleModal = (action, state) => {
  const {
    isOpen,
  } = action;
  return ({
    ...state,
    isOpen,
  });
};
export default (state = initalState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return toggleModal(action, state);
    }
    case CLOSE_MODAL: {
      return toggleModal(action, state);
    }
    default:
      return state;
  }
};
