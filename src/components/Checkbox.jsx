import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const {
    children,
    ...other
  } = props;
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        {...other}
      />
      {children}
    </div>
  );
  // return (
  //   <div className="checkbox">
  //     <label>
  //       <input
  //         type="checkbox"
  //         {...other}
  //       />
  //       {children}
  //     </label>
  //   </div>
  // );
};

Checkbox.propTypes = {};
export default Checkbox;
