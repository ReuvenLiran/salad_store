import React from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Button,
} from 'components';

const OrderButton = (props) => {
  console.log(props);
  const {
    history,
  } = props;
  return (
    <Button
      className="btn order-button"
      onClick={() => history.push('/ingredients')}
    >
      Order Salad
    </Button>
  );
};
// OrderButton.propTypes = {
//   prop,
// };
export default withRouter(OrderButton);
