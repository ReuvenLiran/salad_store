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
      onClick={() => history.push(CHECKOUT_PAGE)}
    >
      Proceed To Checkeout
    </Button>
  );
};

ProceedToCheckout.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(ProceedToCheckout);
