import React from 'react';
import PropTypes from 'prop-types';
import {
  OrderDetailsHeader,
} from '../../../../OrderDetails';

const Field = (props) => {
  const {
    field,
    value,
  } = props;
  return (
    <li>
      <span className="field">{`${field}:`}</span>
      <span className="value">{value}</span>
    </li>
  );
};

const OrderDetails = (props) => {
  const {
    name,
    email,
    notes,
  } = props;
  return (
    <div>
      <OrderDetailsHeader />
      <ul className="order-details-readonly">
        <Field
          field="Name"
          value={name}
        />
        <Field
          field="Email"
          value={email}
        />
        <Field
          field="Notes"
          value={notes}
        />
      </ul>
    </div>
  );
};

OrderDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
};

export default OrderDetails;
