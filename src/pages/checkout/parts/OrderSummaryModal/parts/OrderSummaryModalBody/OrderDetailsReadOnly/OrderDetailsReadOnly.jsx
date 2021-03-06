import React from 'react';
import {
  ORDER_DETAILS_SHAPE,
} from 'types';
import Field from './Field';
import {
  OrderDetailsHeader,
} from '../../../../OrderDetails';

const OrderDetailsReadOnly = (props) => {
  const {
    name,
    email,
    notes,
  } = props;
  return (
    <div>
      <OrderDetailsHeader />
      <ul className="list-full-width order-details-readonly">
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

OrderDetailsReadOnly.propTypes = {
  ...ORDER_DETAILS_SHAPE,
};

export default OrderDetailsReadOnly;
