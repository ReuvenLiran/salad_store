import {
  getOrderDetails,
  sumPriceItemsToCheckout,
  formatItemsToCheckout,
} from 'utils';

const testGetOrderDetails = () => {
  const orderDetails = {
    name: 'name',
    email: 'email',
    notes: 'notes',
  };
  const mock = {
    safsa: 'sfsaf',
    checkout: {
      fsafs: 13131,
      orderDetails: {
        name: 'name',
        email: 'email',
        notes: 'notes',
      },
    },
  };
  const result = getOrderDetails(mock);
  expect(result).toEqual(orderDetails);
};

const testSumPriceItemsToCheckout = () => {
  const mock = {
    checkout: {
      itemsToCheckout: {
        banana: 2,
        apple: 1,
      },
    },
    salad: {
      items: [
        {
          name: 'banana',
          price: 1.4,
        },
        {
          name: 'apple',
          price: 3,
        },
        {
          name: 'orange',
          price: 4,
        },
      ],
    },
  };
  const result = sumPriceItemsToCheckout(mock);
  expect(result).toEqual(5.8);
};
const testFormatItemsToCheckout = () => {
  const items = [{
    name: 'banana',
    count: 2,
    price: 1.4,
  }, {
    name: 'apple',
    count: 1,
    price: 3,
  }];
  const mock = {
    checkout: {
      itemsToCheckout: {
        banana: 2,
        apple: 1,
      },
    },
    salad: {
      items: [
        {
          name: 'banana',
          price: 1.4,
        },
        {
          name: 'apple',
          price: 3,
        },
        {
          name: 'orange',
          price: 4,
        },
      ],
    },
  };
  const result = formatItemsToCheckout(mock);
  expect(result).toEqual(items);
};

describe('Test Utils', () => {
  test('testGetOrderDetails', testGetOrderDetails);
  test('testSumPriceItemsToCheckout', testSumPriceItemsToCheckout);
  test('testFormatItemsToCheckout', testFormatItemsToCheckout);
});
