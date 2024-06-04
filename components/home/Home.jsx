import React from 'react';
import './home.css';
import gif from '../gif/gif';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homeDev container-fluid'>
      <div className='homeparraf'>
        <div className='parrafohome'>
        <h1>Arquitecto / Front End Developer</h1>
        <p className='hometext'>"Arquitectura: Espacios físicos, Front-End: Experiencias digitales."</p>
        </div>
        <div className='cv'>
        <Link to="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/DeveloperCesaMontilla.pdf?alt=media&token=2cc7e5cd-97fd-4181-8ff5-664acffe6f60" style={{ textDecoration: 'none' }}>
  <Button className='buttonhome' color="#35FFA8" text="CV" />
</Link>
        </div>
        <div className='redes'>
        <Button  color="#FAFF01" text="Redes" />
          <img className='imgredes' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/icons8-facebook.gif?alt=media&token=1f1a5fea-93fe-43c4-ba17-593242a575ca" alt="Facebook" />
         
          <a href="https://github.com/cesar22416" target="_blank" rel="noopener noreferrer">
          <img className='imgredes' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/icons8-github.gif?alt=media&token=434f52dc-d738-4716-a138-afb6d7f23bdd" alt="GitHub" />
         </a>
         <a href='https://www.instagram.com/cesarmontillarq/' target="_blank" rel="noopener noreferrer">
          <img className='imgredes' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/icons8-instagram.gif?alt=media&token=83e68c05-a392-4eb0-ab4a-f9dde4d31e4a" alt="Instagram" />
          </a>
        </div>
      </div>
      <div className='homeimg'>
        <img className='imgava' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/ava.png?alt=media&token=3b0df4f0-a8f9-43cb-bd92-6e178e036d4e" alt="" />
      </div>
    </div>
  );
}

export default Home;
