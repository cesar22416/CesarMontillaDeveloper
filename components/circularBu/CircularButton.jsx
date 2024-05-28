import React from 'react';
import PropTypes from 'prop-types';

const CircularButton = ({ onClick, color, textColor, text, icon, margin, padding }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: margin,
    padding: padding,
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {icon && <img src={icon} alt="Icono" style={{ width: '20px', height: '20px' }} />}
      {text}
    </button>
  );
}

CircularButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string, // Ruta del archivo de imagen local
};

export default CircularButton;
