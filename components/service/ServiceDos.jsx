import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>

        <div className='col-md-6'>
          <div className='servimg'>
            <img className='imgservi medimg sinmedi' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/developer.png?alt=media&token=637c13e8-918a-47ea-a68c-49c01acc3409" alt="" />
          </div>
          <div className='Software'>
          </div>
        </div>

        <div className='col-md-5'>
          <div className='box'> 
            <div className='serviceuno'>
              <div className='hruno'>
                <hr className="styled-hr"/>
                <p>01/</p>
                <h1>Layout of web pages</h1>
                <div className='hrbase'>
                  <p>Explore</p>
                  <button className='btn btn-outline-warning'><i className="bi bi-arrow-right-short"></i></button>
                </div>
              </div>
            </div>

            <div className='servicedos'>
              <div className='hruno'>
                <hr className="styled-hr"/>
                <p>02/</p>
                <h1>User interface design</h1>
                <div className='hrbase'>
                  <p>Explore</p>
                  <button className='btn btn-outline-warning'><i className="bi bi-arrow-right-short"></i></button>
                </div>
              </div>
            </div> 

            <div className='servicetres'>
              <div className='hruno'>
                <hr className="styled-hr"/>
                <p>03/</p>
                <h1>Mobile application development</h1>
                <div className='hrbase'>
                  <p>Explore</p>
                  <button  className='btn btn-outline-warning' ><i className="bi bi-arrow-right-short"></i></button>
                </div>
              </div>
            </div> 
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;
