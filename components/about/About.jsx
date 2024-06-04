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
          Hello! I'm a passionate software developer specializing in crafting exceptional web applications. With expertise in technologies like React, Node.js, and more, I've dedicated myself to delivering top-notch solutions that push the boundaries of what's possible in web development.

What sets me apart is not just my technical prowess, but also my ability to collaborate effectively and communicate ideas clearly. I excel in team environments, leveraging my interpersonal skills to foster collaboration and drive success.

In essence, I'm not just a software developer; I'm a visionary problem-solver dedicated to delivering outstanding results.
          </p>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-github imgskill"></i>
            </a>
            <a href="https://www.linkedin.com/in/cesar-montilla-7b9431125/" target="_blank" rel="noopener noreferrer" className="me-2">
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
