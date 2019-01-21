export const getOrderDetails = state => ({
  name: state.checkout.orderDetails.name,
  email: state.checkout.orderDetails.email,
  notes: state.checkout.orderDetails.notes,
});


