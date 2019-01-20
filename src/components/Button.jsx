import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    ...other
  } = props;
  return (
    <button
      className="btn"
      type="button"
      {...other}
    />
  );
};

Button.propTypes = {
  other: PropTypes.any,
};

export default Button;
