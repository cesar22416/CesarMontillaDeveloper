import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ onClick, color, text, icon,  }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
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
  text: PropTypes.string.isRequired,
  icon: PropTypes.object, // PropTypes para el icono de FontAwesome
};

Button.defaultProps = {
  color: '#007bff', // Color azul por defecto
};

export default Button;
