import React from 'react'
import Button from '../button/Button'
import CircularButton from '../circularBu/CircularButton'

const Service = () => {
  return (
    <div className='servicemon'>
        <div>
        <h1>Service</h1>
        <div className='servimg'>
        <img className='imgservi' src="../Img/ux.png" alt="" />
      </div>
        <div>
          <Button text='Software' color='#F5F5F5' textColor='black'/>
          <CircularButton color="#35FFA8" textColor="white" icon="../../Img/FIGMA.png" />
          <CircularButton color="#35FFA8" textColor="white" icon="../../Img/icons8-photoshop-50.png" />
          <CircularButton color="#35FFA8" textColor="white" icon="../../Img/ILLUTRA.png" />
        </div>

    
     
      </div>
    </div>
  )
}

export default Service
