import React from 'react';
import PropTypes from 'prop-types';
import {
  InputField,
  TextArea,
} from 'components';
import OrderDetailsHeader from './OrderDetailsHeader';

const OrderDetails = (props) => {
  const {
    name,
    email,
    notes,
    updateField,
  } = props;
  const onChange = (e) => {
    const {
      target: {
        name: fieldName,
        value,
      },
    } = e;
    updateField(fieldName, value);
  };
  return (
    <div className="order-details">
      <OrderDetailsHeader />
      <InputField
        label="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <InputField
        label="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <TextArea
        label="Notes"
        name="notes"
        value={notes}
        rows={3}
        onChange={onChange}
      />
    </div>
  );
};

// OrderDetails.propTypes = {
//   firstName
//   lastName,
//   notes,
// };
export default OrderDetails;
