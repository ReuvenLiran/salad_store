import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = (props) => {
  const {
    children,
  } = props;
  return (
    <div
      className="modal-body"
    >
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModalBody;
