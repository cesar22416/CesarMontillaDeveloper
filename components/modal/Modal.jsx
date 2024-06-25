import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, title, content, img }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {title && <h2 className="modal-title">{title}</h2>}
        
        <div className="modal-content">
          <p>{content}</p>
          {img && <img src={img} alt={title} className="modal-image" />}
          <button onClick={onClose} className='btn btn-outline-warning modal_close'>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
