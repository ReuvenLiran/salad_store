import {
  CLOSE_MODAL,
  OPEN_MODAL,
  CLEAR_MODAL,
} from 'actions';

import reducer from './modal';

const initalState = {
  isOpen: false,
};

const testInitalState = () => {
  expect(reducer(undefined, {}))
    .toEqual(initalState);
};

const testOpenModal = () => {
  expect(reducer(initalState, {
    type: OPEN_MODAL,
    isOpen: true,
  })).toHaveProperty('isOpen', true);
};

const testCloseModal = () => {
  expect(reducer(initalState, {
    type: CLOSE_MODAL,
    isOpen: false,
  })).toHaveProperty('isOpen', false);
};

const testClearModal = () => {
  expect(reducer(initalState, {
    type: CLEAR_MODAL,
  })).toEqual(initalState);
};

describe('Test Modal Reducer', () => {
  test('testInitalState', testInitalState);
  test('testOpenModal', testOpenModal);
  test('testCloseModal', testCloseModal);
  test('testClearModal', testClearModal);
});
