import {
  STORE_DATA,
} from 'actions';
import reducer from './salad';

const initalState = {
  items: [],
};

const testInitalState = () => {
  expect(reducer(undefined, {}))
    .toEqual(initalState);
};

const testStoreData = () => {
  expect(reducer(initalState, {
    type: STORE_DATA,
    items: ['sss'],
  }))
    .toHaveProperty('items', ['sss']);
};

describe('Test Salad Reducer', () => {
  test('Test Initial State', testInitalState);
  test('Test Store Data', testStoreData);
});
