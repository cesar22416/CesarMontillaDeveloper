import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skill.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SkillLenguajes from './SkillLenguajes';

const Skill = () => {
  const skills = [
    {
      icon: "bi-github",
      title: "Git Version Control",
      description: "Git is a version control system that enables developers to track code changes and collaborate efficiently on projects."
    },
    {
      icon: "bi-window-desktop",
      title: "Web Developer",
      description: "Web Developer proficient in HTML, CSS, JavaScript, and React. Experienced in creating responsive and user-friendly web applications."
    },
    {
      icon: "bi-ui-checks-grid",
      title: "UX/UI",
      description: "UX/UI Designer skilled in creating intuitive and engaging user experiences using tools like Figma and Sketch."
    },
    {
      icon: "bi-app-indicator",
      title: "App Design",
      description: "App Designer proficient in creating intuitive and visually appealing user interfaces using tools like Sketch and Adobe XD."
    },
    {
      icon: "bi-person-badge",
      title: "User Interface Design",
      description: "User Interface (UI) Designer adept at crafting visually appealing and user-friendly interfaces for digital products."
    },
    {
      icon: "bi-brush",
      title: "Illustration",
      description: "Illustrator skilled in creating captivating and expressive illustrations for various purposes, including digital media, print, and marketing materials."
    }
  ];

  return (
    <div className='container mt-5 skillLenguajes'>
       <h1 className='tituloSkill'>Skill</h1>
       <SkillLenguajes />
      <div className="row">
       
      </div>

      <div className="row"> {/* Fila para los otros skills */}
        {skills.map((skill, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <i className={`bi ${skill.icon} imgskill`}></i>
                <h5 className="card-title">{skill.title}</h5>
                <p className="card-text">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
