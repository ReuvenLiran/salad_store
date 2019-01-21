import React from 'react';
import OrderButton from './OrderButton';

const LandingPage = () => (
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

export default LandingPage;
