import React from 'react'
import Button from '../button/Button'
import CircularButton from '../circularBu/CircularButton'
import './Service.css'

const ServiceDos = () => {
  return (
    <div className='servicemon'>
        <div className='serviuno'>
        <div className='servimg'>
        <img className='imgservi' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/developer.png?alt=media&token=6b4061c1-c5ab-448c-a9e1-e68f5f8bdd90" alt="" />
        </div>
        <div className='Software'>
          <Button text='Languages' color='#F5F5F5' textColor='black'/>
          <CircularButton margin="0 35px 0 0 " color="#35FFA8" textColor="white" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/icons8-html-50.png?alt=media&token=8133c6c5-79b5-4835-a73c-190b8bd9320e" />
          <CircularButton margin="0 35px 0 0 " color="#35FFA8" textColor="white" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/icons8-javascript-50.png?alt=media&token=9edc53ca-4efa-46a4-a626-5304aed5d07d" />
          <CircularButton margin="0 35px 0 0 " color="#35FFA8" textColor="white" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/icons8-reaccionar-100.png?alt=media&token=118d7dae-e473-44dc-a4be-27adb2a57d33" />
        </div>
      </div>
      <div className='box'>

      <div className='serviceuno'>
      <div className='hruno'>
      <hr className="styled-hr"/>
      <p>01/</p>
      <h1>Layout of Web Pages</h1>
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
      <h1>User Interface Design</h1>
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
      <h1>Mobile Application <br/>Development</h1>
      <div className='hrbase'>
      <p>Explore</p>
        <CircularButton  color="#35FFA8" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/flecha.png?alt=media&token=f3eb9225-567b-473b-a140-9f597a54a569"/>
      </div>
      </div>
      </div> 


      
      </div>
    </div>
  )
}

export default ServiceDos
