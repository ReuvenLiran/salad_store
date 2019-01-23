import {
  getData,
  STORE_DATA,
} from './salad';

const testGetData = () => {
  const items = {
    type: STORE_DATA,
    items: [{
      a: 1,
    }, {
      a: 2,
    }],
  };
  const result = getData([{
    a: 1,
  }, {
    a: 2,
  }]);
  expect(result).toEqual(items);
};
describe('Test Salad Actions', () => {
  test('testGetData', testGetData);
});
