import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <button 
    disabled={active}
    onClick={
      e => {
        e.preventDefault();
        onClick();
      }
    }
  >
    {children}
  </button>
);

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired
};

export default Link;