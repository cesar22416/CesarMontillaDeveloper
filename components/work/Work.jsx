import React from 'react';
import { Link } from 'react-router-dom';
import CircularButton from '../circularBu/CircularButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './work.css';

const Work = () => {
  const projects = [
    
    {
      title: 'E-commerce',
      description: 'Web/Multipages website',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/mono%20moto.PNG?alt=media&token=1027792a-8cc5-4f3a-8d79-86fb7d13382c',
      link: 'https://verdant-cheesecake-406dc2.netlify.app/',
    },
    {
      title: 'Equema_ARQ',
      description: 'Web/One Page',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/Esquema.PNG?alt=media&token=fcc3e472-772a-43a4-94c9-d168e8e9bd4f',
      link: 'https://shiny-maamoul-8db74f.netlify.app/',
    },
    {
      title: 'Escuela DE Yoga',
      description: 'Web/Multipages website',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/yoga.JPG?alt=media&token=74a09178-9274-4b44-bdbd-b6f704df156e',
      link: 'https://jade-souffle-0f5310.netlify.app/',
    },
    {
      title: 'Motorcycle trip app',
      description: 'Design UX/UI',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/Group%2020.png?alt=media&token=a99dfb55-5ae6-4ed6-a02e-41e0a929dfeb',
      link: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/APPmot.pdf?alt=media&token=7bdd8dec-7300-47eb-a550-e0271db4cd42',
    },
    {
      title: 'Social networking',
      description: 'Design UX/UI',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/socail.png?alt=media&token=d750c592-bd2f-4ba2-91e9-b2688f9f6349',
      link: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/app.pdf?alt=media&token=95656506-7cb0-4ae3-825f-77a5270282f0',
    },{
      title: 'Visor de Modelos 3D',
      description: 'Design UX/UI',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/ONE.png?alt=media&token=0a98c6fc-a649-4dd3-a940-2783ba87bb18',
      link: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/3D.pdf?alt=media&token=20257d7a-ff5a-4ebd-83fb-ddd698eac764',
    },
    {
      title: 'Shoes app',
      description: 'Design UX/UI',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/shoes.png?alt=media&token=7f146470-1096-4665-8222-6535d883e370',
      link: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/shoes.pdf?alt=media&token=0d994412-9574-407e-86ee-f50c60d8d383',
    },
    {
      title: 'SimonGame',
      description: 'Game',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/imgame.PNG?alt=media&token=8bcacd28-3b99-4c73-8eb6-b21f44d09841',
      link: 'https://simongam3.netlify.app/',
    },
    {
      title: 'ChatApp',
      description: 'Chat',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/imgchat.PNG?alt=media&token=b64ff093-4855-4c88-bb8f-487c1bb805fc',
      link: 'https://chatchut.netlify.app',
    },
    {
      title: 'GenereQr',
      description: 'QR',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/qrdddd.PNG?alt=media&token=2fc67ba3-f6f4-49a9-acbd-1733c08ba4dd',
      link: 'https://generqr.netlify.app/',
    },{
      title: 'Visor de Modelos 3D',
      description: '3D',
      img: 'https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/Burguer.PNG?alt=media&token=b12d7d74-b8b0-43b5-a12c-3b9413c819c9',
      link: 'https://dwg6.netlify.app/',
    }



  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 titulowork">My Work</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <img src={project.img} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
              <div className="card-footer text-center">
                <Link to={project.link} target="_blank" className="btn btn-primary">
                  <button className='btn btn-outline-warning'><i class="bi bi-arrow-right-short"></i></button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
