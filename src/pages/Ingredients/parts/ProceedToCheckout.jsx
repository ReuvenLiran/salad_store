import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'components';
import {
  CHECKOUT_PAGE,
} from 'consts';

const ProceedToCheckout = (props) => {
  const {
    history,
  } = props;
  return (
    <Button
      className="btn order-button"
      // className="btn btn-primary"
      onClick={() => history.push(CHECKOUT_PAGE)}
    >
      Proceed To Checkeout
    </Button>
  );
};

export default withRouter(ProceedToCheckout);
