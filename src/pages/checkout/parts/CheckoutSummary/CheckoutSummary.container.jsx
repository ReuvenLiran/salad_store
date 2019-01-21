import { connect } from 'react-redux';
import CheckoutSummary from './CheckoutSummary';

const mapStateToProps = (state) => {
  const {
    itemsToCheckout = {},
    data: {
      items = [],
    },
  } = state.salad;
  let summary = 0;
  const ingredients = items.reduce((total, item) => {
    const { name } = item;
    if (itemsToCheckout[name]) {
      const count = itemsToCheckout[name];
      total.push({
        ...item,
        count,
      });
      summary += (count * item.price);
    }
    return total;
  }, []);

const Mock = [
  {
    name: 'banana',
    count: 2,
    price: 0.3,
  }, {
    name: 'apple',
    count: 3,
    price: 1.3,
  },
];
  return ({
    ingredients: Mock,
    summary,
  });
};

export default connect(mapStateToProps)(CheckoutSummary);
