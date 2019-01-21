import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => {
  const {
    field,
    value,
  } = props;
  return (
    <li>
      <span className="field">{`${field}:`}</span>
      <span className="value">{value}</span>
    </li>
  );
};

Field.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
