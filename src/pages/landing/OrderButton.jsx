import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  PrimButton,
} from 'components';
import {
  INGREDIENTS_PAGE,
} from 'consts';

const OrderButton = (props) => {
  const {
    history,
  } = props;
  return (
    <PrimButton
      onClick={() => history.push(INGREDIENTS_PAGE)}
    >
      Order Salad
    </PrimButton>
  );
};

OrderButton.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(OrderButton);
