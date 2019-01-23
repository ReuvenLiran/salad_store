import {
  sumItemsByName,
  updateField,
  UPDATE_FIELD,
  clearCheckout,
  CLEAR_CHECKOUT,
} from './checkout';

const testMoveToCart = () => {
  const itemsToCheckout = {
    banana: 2,
    apple: 3,
  };
  const result = sumItemsByName('banana', itemsToCheckout);
  expect(result).toEqual(3);
};

const testUpdateField = () => {
  const result = updateField('bla', 'blabla');
  expect(result)
    .toEqual({
      type: UPDATE_FIELD,
      name: 'bla',
      value: 'blabla',
    });
};
const testClearCheckout = () => {
  expect(clearCheckout()).toEqual({
    type: CLEAR_CHECKOUT,
  });
};
describe('Test Checkout Actions', () => {
  test('testMoveToCart', testMoveToCart);
  test('testClearCheckout', testClearCheckout);
  test('testUpdateField', testUpdateField);
});
