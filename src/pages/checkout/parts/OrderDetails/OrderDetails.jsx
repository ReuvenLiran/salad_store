import React from 'react';
import PropTypes from 'prop-types';
import {
  InputField,
} from 'components';

const OrderDetails = (props) => {
  const {
    firstName,
    lastName,
    notes,
    updateField,
  } = props;
  const onChange = (e) => {
    const {
      target: {
        name, 
        value,
      },
    } = e;
    updateField(name, value);
  };
  return (
    <div className="order-details">
      <InputField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={onChange}
      />
      <InputField
        label="Last Name"
        name="lastName"
        value={lastName}
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
