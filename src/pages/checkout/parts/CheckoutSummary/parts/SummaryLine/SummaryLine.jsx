import React from 'react';
import PropTypes from 'prop-types';

const SummaryLine = (props) => {
  const { sum } = props;
  const summaryText = `${sum} $`;
  return (
    <div className="summary-line">
      <hr />
      <div className="spread-columns">
        <h6>Total</h6>
        <span>{summaryText}</span>
      </div>
    </div>
  );
};

SummaryLine.propTypes = {
  sum: PropTypes.number.isRequired,
};

export default SummaryLine;
