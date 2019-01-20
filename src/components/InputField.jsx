import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const {
    label,
    ...other
  } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...other}
        className="form-control"
      />
    </div>
  );
};

InputField.propTypes = {};

export default InputField;
