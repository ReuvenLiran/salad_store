import React from 'react';
import PropTypes from 'prop-types';
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

OrderButton.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(OrderButton);
