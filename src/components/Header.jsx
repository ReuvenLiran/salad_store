import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {
    children,
  } = props;
  return (
    <header>
      <h3>
        {children}
      </h3>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
