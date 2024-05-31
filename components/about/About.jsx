import React from 'react'
import './about.css';
const About = () => {
  return (
    <div>
       <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/ava.png?alt=media&token=3b0df4f0-a8f9-43cb-bd92-6e178e036d4e" className="rounded-circle img-fluid" alt="Profile" />
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
            Hello! I am a software developer with a passion for creating web applications.
            I have experience in various technologies including React, Node.js, and MongoDB.
            I enjoy learning new things and keeping up with the latest trends in web development.
          </p>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-github imgskill"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-linkedin imgskill"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter imgskill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
