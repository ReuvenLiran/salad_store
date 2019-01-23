import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const TextArea = (props) => {
  const {
    label,
    ...other
  } = props;
  return (
    <FormGroup
      label={label}
    >
      <textarea
        {...other}
        className="form-control"
      />
    </FormGroup>
  );
};

TextArea.propTypes = {
  label: PropTypes.node.isRequired,
};
export default TextArea;
