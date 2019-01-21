import React from 'react';
import PropTypes from 'prop-types';
import {
  ORDER_DETAILS_SHAPE,
} from 'types';
import Field from './Field';
import {
  OrderDetailsHeader,
} from '../../../../OrderDetails';

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
  ...ORDER_DETAILS_SHAPE,
};

export default OrderDetails;
