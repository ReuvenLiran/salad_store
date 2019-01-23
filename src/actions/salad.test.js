import {
  getData,
  STORE_DATA,
} from './salad';

const testGetData = () => {
  const data = {
    type: STORE_DATA,
    data: [{
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
  expect(result).toEqual(data);
};
describe('Test Salad Actions', () => {
  test('testGetData', testGetData);
});
