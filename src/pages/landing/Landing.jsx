import React from 'react';
import PropTypes from 'prop-types';
import OrderButton from './OrderButton';

const LandingPage = (props) => {
  const {
    prop,
  } = props;
  return (
    <div className="landing-page bg-image">
      <h1 className="white-text">
        Welcome To La Salad
      </h1>
      <h4 className="white-text lead">
        Order any salad here, best in town!
      </h4>
      <OrderButton />
    </div>
  );
};

LandingPage.propTypes = {};
export default LandingPage;
