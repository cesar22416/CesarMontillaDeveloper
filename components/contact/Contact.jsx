import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className='titulowork'>Contacto</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows="5"></textarea>
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: '#35FFA8', borderColor: '#35FFA8', color: '#fff' }}>Enviar</button>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Información de contacto</h3>
          <p>Dirección: Buenos Aires, Argentina</p>
          <p>Teléfono: +541167211326</p>
          <p>Correo electrónico: Cesarmontilla22@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
