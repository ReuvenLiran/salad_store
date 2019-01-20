import React from 'react';
import PropTypes from 'prop-types';

const SummaryLine = (props) => {
  const { summary } = props;
  const summaryText = `${summary} $`;
  return (
    <div className="summary-line">
      <hr />
      <div className="spread-columns">
        <h6>Summary</h6>
        <span>{summaryText}</span>
      </div>
    </div>
  );
};

export default SummaryLine;
