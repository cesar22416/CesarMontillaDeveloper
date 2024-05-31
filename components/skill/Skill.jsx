import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skill.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Skill = () => {
  return (
    <div className='container mt-5'>
        <h1 className='titulo'>Example heading </h1>
      <div className="row">

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
            <i className="bi bi-github imgskill"></i>
              <h5 className="card-title">Git Version Control</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
            <i className="bi bi-window-desktop imgskill"></i>
              <h5 className="card-title">Web Developer</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
            <i className="bi bi-ui-checks-grid imgskill"></i>
              <h5 className="card-title">UX/UI</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
            <i className="bi bi-app-indicator imgskill"></i>
              <h5 className="card-title">App Design</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
            <i className="bi bi-person-badge imgskill"></i>
              <h5 className="card-title">User Interface Design</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
            <i className="bi bi-brush imgskill"></i>
              <h5 className="card-title">illustration</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>








      </div>
    </div>
  );
};

export default Skill;
