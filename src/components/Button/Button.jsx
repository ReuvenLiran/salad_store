import React from 'react';

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

export default Button;
