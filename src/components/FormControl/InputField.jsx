import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const InputField = (props) => {
  const {
    label,
    ...other
  } = props;
  return (
    <FormGroup
      label={label}
    >
      <input
        {...other}
        className="form-control"
      />
    </FormGroup>
  );
};

InputField.propTypes = {
  label: PropTypes.node.isRequired,
};

export default InputField;
