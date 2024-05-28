import React from 'react';
import './home.css';
import gif from '../gif/gif';
import Button from '../button/Button';

const Home = () => {
  return (
    <div className='homeDev container-fluid'>
      <div className='homeparraf'>
        <div className='parrafohome'>
        <h1>Arquitecto / Front End Developer</h1>
        <p className='hometext'>"Arquitectura: Espacios físicos, Front-End: Experiencias digitales."</p>
        </div>
        <div className='cv'>
        <Button className='buttonhome' color="#35FFA8" text="CV---" />
        <Button className='buttonhome' color="black" text="Porfolio" />
        </div>
        <div className='redes'>
        <Button  color="#FAFF01" text="Redes" />
          <img className='imgredes' src="../../public/Img/icons8-facebook.gif" alt="Facebook" />
          <img className='imgredes' src="../../public/Img/icons8-github.gif" alt="GitHub" />
          <img className='imgredes' src="../../public/Img/icons8-instagram.gif" alt="Instagram" />
        </div>
      </div>
      
      <div className='homeimg'>
        <img className='imgava' src="../../public/Img/ava.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
