import React from 'react';
import PropTypes from 'prop-types';

const SummaryLine = (props) => {
  const { sum } = props;
  const summaryText = `${sum} $`;
  return (
    <div className="summary-line">
      <hr />
      <div className="summary-line-text spread-columns align-items-center">
        <span>Total</span>
        <span>{summaryText}</span>
      </div>
    </div>
  );
};

SummaryLine.propTypes = {
  sum: PropTypes.number.isRequired,
};

export default SummaryLine;
