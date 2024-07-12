import React from 'react';
import './skill.css';
import { FaJsSquare, FaCss3Alt, FaHtml5, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';

const SkillLenguajes = () => {
    const lenguajes = [
      { icon: <FaJsSquare size={40} />, title: "JavaScript" }, // Tamaño 40
      { icon: <FaCss3Alt size={40} />, title: "CSS" },
      { icon: <FaHtml5 size={40} />, title: "HTML" },
      { icon: <FaReact size={40} />, title: "React" },
      { icon: <FaJsSquare size={40} />, title: "Next.js" },
      { icon: <FaJsSquare size={40} />, title: "Vite" },
      { icon: <FaNodeJs size={40} />, title: "Node.js" },
      
    ];
  
    return (
      <ul className="skill-lenguajes-container">
        {lenguajes.map((lenguaje, index) => (
          <li key={index} className="skill-lenguajes-card">
            {lenguaje.icon}
            <h5 className="card-title">{lenguaje.title}</h5>
          </li>
        ))}
      </ul>
    );
  };

export default SkillLenguajes;
