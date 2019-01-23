import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';

const Modal = (props) => {
  const {
    isOpen,
    className,
    children,
    onClose,
  } = props;

  return (
    <ReactModal
      appElement={document.getElementById('root')}
      closeTimeoutMS={750}
      isOpen={isOpen}
      className={classNames('dialog', className)}
      shouldCloseOnOverlayClick
      onRequestClose={onClose}
      overlayClassName="dialog-overlay"
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
