import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>

        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='servimg'>
            <img className='imgservi medimg sinmedi' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/ux_ui.png?alt=media&token=96e5d1ef-a0c3-440e-b10e-6949c15412a2" alt="UI/UX Design" />
          </div>
          <div className='Software'></div>
        </div>

        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='box'>
            <div className='serviceuno'>
              <div className='hruno'>
                <hr className="styled-hr"/>
                <p>01/</p>
                <h1>Web UI/UX Design</h1>
                <div className='hrbase'>
                  <p>Explore</p>
                  <button className='btn btn-outline-warning'>
                    <i className="bi bi-arrow-right-short"></i>
                  </button>
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
                  <button className='btn btn-outline-warning'>
                    <i className="bi bi-arrow-right-short"></i>
                  </button>
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
                  <button className='btn btn-outline-warning'>
                    <i className="bi bi-arrow-right-short"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-1'>
          <Link to="/serviceDos" className='btn btn-sm float-right' style={{ fontSize: '0.6rem', backgroundColor: '#35FFA8', color: 'white', width: '35px' }}>+</Link>
        </div>

      </div>
    </div>
  );
}

export default Service;
