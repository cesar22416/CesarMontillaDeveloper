import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className='titulowork'>Contact</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Name</label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Message</label>
              <textarea className="form-control" id="mensaje" rows="5"></textarea>
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: '#35FFA8', borderColor: '#35FFA8', color: '#fff' }}>Send</button>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Contact information</h3>
          <p>Address: Buenos Aires, Argentina</p>
          <p>Phone: +541167211326</p>
          <p>Email: Cesarmontilla22@gmail.com</p>
          <p>
            <a href="https://wa.me/541167211326?text=Hola%20Cesar%2C%20quiero%20saber%20más%20sobre%20tus%20servicios" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="ms-2" 
               style={{ textDecoration: 'none', color: '#35FFA8' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '2rem', color: '#35FFA8' }}></i> Send Message
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
