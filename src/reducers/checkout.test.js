import {
  MOVE_ITEM_TO_CART,
  UPDATE_FIELD,
  CLEAR_CHECKOUT,
} from 'actions';
import reducer from './checkout';


const initalState = {
  itemsToCheckout: {},
  orderDetails: {
    name: '',
    email: '',
    notes: '',
  },
};


const testInitalState = () => {
  expect(reducer(initalState, {}))
    .toEqual(initalState);
};
const testMoveToCart = () => {
  expect(reducer(initalState, {
    type: MOVE_ITEM_TO_CART,
    name: 'bla',
    count: 4,
  })).toHaveProperty([
    'itemsToCheckout',
    'bla',
  ], 4);
};

const testUpdateField = () => {
  expect(reducer(initalState, {
    type: UPDATE_FIELD,
    name: 'bla',
    value: 'bla bla',
  })).toHaveProperty([
    'orderDetails',
    'bla',
  ], 'bla bla');
};

const testClearCheckout = () => {
  expect(reducer(initalState, {
    type: CLEAR_CHECKOUT,
  })).toEqual(initalState);
};

describe('Test Checkout Reducer', () => {
  test('Test InitalState', testInitalState);
  test('Test MoveToCart', testMoveToCart);
  test('Test UpdateField', testUpdateField);
  test('Test ClearCheckout', testClearCheckout);
});
