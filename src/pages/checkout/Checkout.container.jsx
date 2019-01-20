import { connect } from 'react-redux';
import Checkout from './Checkout';

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
  return ({
    ingredients,
    summary,
  });
};
export default connect(mapStateToProps)(Checkout);
