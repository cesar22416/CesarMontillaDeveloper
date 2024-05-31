// CircularButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './cb.css'

const CircularButton = ({ color, icon }) => {
  return (
    <div className="circular-button" style={{ backgroundColor: color }}>
      <img src={icon} alt="icon" />
    </div>
  );
};

CircularButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CircularButton;
