import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
} from 'components';
import {
  INGREDIENTS_PAGE,
} from 'consts';

const OrderButton = (props) => {
  const {
    history,
  } = props;
  return (
    <Button
      className="btn order-button"
      onClick={() => history.push(INGREDIENTS_PAGE)}
    >
      Order Salad
    </Button>
  );
};

export default withRouter(OrderButton);
