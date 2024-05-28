import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, color, textColor, text, icon }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor, // Nuevo color para el texto
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:'35px',
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: '5px' }} />}
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string, // Nueva prop para el color del texto
  text: PropTypes.string.isRequired,
  icon: PropTypes.object, // PropTypes para el icono de FontAwesome
};

Button.defaultProps = {
  color: '#007bff', // Color azul por defecto
  textColor: 'white', // Color blanco por defecto para el texto
};

export default Button;
