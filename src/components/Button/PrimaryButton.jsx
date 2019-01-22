import React from 'react';
import Button from './Button';

const PrimButton = (props) => {
  const {
    ...other
  } = props;
  return (
    <Button
      className="btn primary-button"
      {...other}
    />
  );
};

export default PrimButton;
