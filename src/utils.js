export const getOrderDetails = state => ({
  name: state.checkout.orderDetails.name,
  email: state.checkout.orderDetails.email,
  notes: state.checkout.orderDetails.notes,
});

export const sumPriceItemsToCheckout = (state) => {
  const {
    itemsToCheckout,
  } = state.checkout;
  const { items } = state.salad;
  return items.reduce((total, item) => {
    const { name } = item;
    const count = itemsToCheckout[name];
    let summary = total;
    if (count) {
      summary += (count * item.price);
    }
    return summary;
  }, 0);
};

export const formatItemsToCheckout = (state) => {
  const {
    itemsToCheckout,
  } = state.checkout;
  const { items } = state.salad;
  return items.reduce((total, item) => {
    const { name } = item;
    const count = itemsToCheckout[name];
    if (count) {
      total.push({
        ...item,
        count,
      });
    }
    return total;
  }, []);
};
