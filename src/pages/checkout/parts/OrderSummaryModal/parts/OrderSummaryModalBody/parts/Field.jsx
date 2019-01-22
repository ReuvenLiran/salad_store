import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => {
  const {
    field,
    value,
  } = props;
  let strVal = value;
  if (strVal.length === 0) {
    strVal = <span>&mdash;</span>;
  }
  return (
    <li className="list-item column-display">
      <span className="field">{`${field}:`}</span>
      <span className="value">{strVal}</span>
    </li>
  );
};

Field.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
