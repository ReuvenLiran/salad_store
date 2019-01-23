import {
  closeModal,
  openModal,
  clearModal,
  CLOSE_MODAL,
  OPEN_MODAL,
  CLEAR_MODAL,
} from './modal';

const testCloseModal = () => {
  const close = {
    type: CLOSE_MODAL,
    isOpen: false,
  };
  expect(closeModal()).toEqual(close);
};

const testOpenModal = () => {
  const open = {
    type: OPEN_MODAL,
    isOpen: true,
  };
  expect(openModal()).toEqual(open);
};

const testClearModal = () => {
  const clear = {
    type: CLEAR_MODAL,
  };
  expect(clearModal()).toEqual(clear);
};

describe('Test Modal Actions', () => {
  test('testCloseModal', testCloseModal);
  test('testOpenModal', testOpenModal);
  test('testClearModal', testClearModal);
});
