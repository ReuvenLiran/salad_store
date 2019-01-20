import React from 'react';
import PropTypes from 'prop-types';
import {
  InputField,
  TextArea,
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
      <h6>
        Order Details
      </h6>
      <hr />
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
      <TextArea
        label="Notes"
        name="notes"
        value={notes}
        rows={5}
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
