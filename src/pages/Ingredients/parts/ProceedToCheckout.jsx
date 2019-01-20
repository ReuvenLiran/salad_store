import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'components';

const ProceedToCheckout = (props) => {
  const {
    history,
  } = props;
  return (
    <Button
      className="btn btn-primary"
      onClick={() => history.push('/checkout')}
    >
      Proceed To Checkeout
    </Button>
  );
};

export default withRouter(ProceedToCheckout);
