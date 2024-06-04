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
          <div className="card h-100">
            <div className="card-body">
            <i className="bi bi-github imgskill"></i>
              <h5 className="card-title">Git Version Control</h5>
              <p className="card-text">Git is a version control system that enables developers to track code changes and collaborate efficiently on projects.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
            <i className="bi bi-window-desktop imgskill"></i>
              <h5 className="card-title">Web Developer</h5>
              <p className="card-text">Web Developer proficient in HTML, CSS, JavaScript, and React. Experienced in creating responsive and user-friendly web applications.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
            <i className="bi bi-ui-checks-grid imgskill"></i>
              <h5 className="card-title">UX/UI</h5>
              <p className="card-text">UX/UI Designer skilled in creating intuitive and engaging user experiences using tools like Figma and Sketch.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
            <i className="bi bi-app-indicator imgskill"></i>
              <h5 className="card-title">App Design</h5>
              <p className="card-text">App Designer proficient in creating intuitive and visually appealing user interfaces using tools like Sketch and Adobe XD.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
            <i className="bi bi-person-badge imgskill"></i>
              <h5 className="card-title">User Interface Design</h5>
              <p className="card-text">User Interface (UI) Designer adept at crafting visually appealing and user-friendly interfaces for digital products.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
            <i className="bi bi-brush imgskill"></i>
              <h5 className="card-title">illustration</h5>
              <p className="card-text">Illustrator skilled in creating captivating and expressive illustrations for various purposes, including digital media, print, and marketing materials.</p>
            </div>
          </div>
        </div>








      </div>
    </div>
  );
};

export default Skill;
