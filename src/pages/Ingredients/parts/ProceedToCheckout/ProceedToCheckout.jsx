import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { PrimButton } from 'components';
import {
  CHECKOUT_PAGE,
} from 'consts';

const ProceedToCheckout = (props) => {
  const {
    history,
    disabled,
  } = props;
  return (
    <PrimButton
      disabled={disabled}
      onClick={() => history.push(CHECKOUT_PAGE)}
    >
      Proceed To Checkeout
    </PrimButton>
  );
};

ProceedToCheckout.propTypes = {
  history: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withRouter(ProceedToCheckout);
