import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import Button from '../button/Button';
import CircularButton from '../circularBu/CircularButton';
import './Service.css';

const Service = () => {
  return (
    <div className='servicemon'>
      <div className='serviuno'>
        <div className='servimg'>
          <img className='imgservi' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/ux_ui.png?alt=media&token=96e5d1ef-a0c3-440e-b10e-6949c15412a2" alt="" style={{ height: '408px', width:'352px' }} />
        </div>
        <div className='Software'>
          <Button text='Software' color='#F5F5F5' textColor='black'/>
          <CircularButton margin="0 35px 0 0 " color="#35FFA8" textColor="white" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/FIGMA.png?alt=media&token=953fff09-30bf-44e6-bbe1-7924b91c2c27" />
          <CircularButton margin="0 35px 0 0 " color="#35FFA8" textColor="white" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/icons8-photoshop-50.png?alt=media&token=fba0f98f-2756-4b05-91dd-4d88e15bdad7" />
          <CircularButton margin="0 35px 0 0 " color="#35FFA8" textColor="white" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/ILLUTRA.png?alt=media&token=588b730f-7e22-4c02-8b50-a79db6b6484b" />
        </div>
      </div>
      <div className='box'>

        <div className='serviceuno'>
          <div className='hruno'>
            <hr className="styled-hr"/>
            <p>01/</p>
            <h1>Web UI/UX Design</h1>
            <div className='hrbase'>
              <p>Explore</p>
              <CircularButton  color="#35FFA8" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/flecha.png?alt=media&token=f3eb9225-567b-473b-a140-9f597a54a569"/>
            </div>
          </div>
        </div>

        <div className='servicedos'>
          <div className='hruno'>
            <hr className="styled-hr"/>
            <p>02/</p>
            <h1>Mobile App UI/UX Design</h1>
            <div className='hrbase'>
              <p>Explore</p>
              <CircularButton  color="#35FFA8" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/flecha.png?alt=media&token=f3eb9225-567b-473b-a140-9f597a54a569"/>
            </div>
          </div>
        </div> 
      
        <div className='servicetres'>
          <div className='hruno'>
            <hr className="styled-hr"/>
            <p>03/</p>
            <h1>Moodboard</h1>
            <div className='hrbase'>
              <p>Explore</p>
              <CircularButton  color="#35FFA8" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/flecha.png?alt=media&token=f3eb9225-567b-473b-a140-9f597a54a569"/>
            </div>
          </div>
        </div> 
      
      </div>
      {/* Agrega un enlace que te lleve a ServiceDos */}
      <Link to="/serviceDos"><Button text='More' textColor='black' color="#FAFF01"/></Link>
    </div>
    
  )
}

export default Service;
