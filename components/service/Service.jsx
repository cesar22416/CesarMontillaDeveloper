import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import './Service.css';

const services = [
  {
    id: 1,
    title: 'Web UI/UX Design',
    exploreText: 'Explore',
    link: '/web-ui-ux-design',
    modalContent: 'Creamos experiencias digitales que cautivan y convierten. Nos especializamos en diseñar interfaces intuitivas que no solo sean visualmente atractivas, sino que también maximicen la usabilidad y la funcionalidad. Desde el diseño de prototipos hasta la implementación final, nuestro enfoque centrado en el usuario garantiza que cada elemento de la interfaz esté meticulosamente diseñado para mejorar la interacción del usuario y optimizar los objetivos comerciales. Déjanos transformar tu visión en una experiencia digital extraordinaria que eleve tu marca a nuevos niveles',
    img:''
  },
  {
    id: 2,
    title: 'Mobile App UI/UX Design',
    exploreText: 'Explore',
    link: '/mobile-app-ui-ux-design',
    modalContent: 'Me especializamos en crear experiencias digitales que no solo sean estéticamente atractivas, sino también intuitivas y efectivas. Desde el primer boceto hasta el lanzamiento final, estamos comprometidos a diseñar interfaces que no solo impresionen visualmente, sino que también maximicen la facilidad de uso y la satisfacción del usuario. Nuestro enfoque meticuloso y centrado en el usuario nos permite garantizar que cada interacción en tu aplicación móvil sea fluida y significativa. Permítenos colaborar contigo para transformar tu visión en una aplicación móvil que no solo cumpla, sino que supere tus expectativas y las de tus usuarios',
    img:''
  },
  {
    id: 3,
    title: 'Moodboard',
    exploreText: 'Explore',
    link: '/moodboard',
    modalContent: 'Descubre el potencial del diseño con nuestro servicio de Moodboard UI. Creamos moodboards digitales personalizados que capturan y comunican tu visión de manera visualmente impactante. Nuestro equipo experimentado no solo facilita la colaboración efectiva entre equipos, sino que también transforma conceptos en resultados tangibles y emocionantes. Desde inspirar a tu audiencia hasta impulsar la innovación, estamos aquí para convertir tus ideas en realidad. Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos llevar tus proyectos al siguiente nivel.',
    img: ''
  }
];

const Service = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
    img: ''
  });

  const openModal = (title, content, img) => {
    setModalContent({ title, content, img });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='container mt-5'>

      <div className='col-lg-4 col-md-6 mb-4 servicio_imagen'>
        <div className='servimg'>
          <img className='imgservi medimg sinmedi' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/ux_ui.png?alt=media&token=96e5d1ef-a0c3-440e-b10e-6949c15412a2" alt="UI/UX Design" />
        </div>
      </div> 


      <div className='row'>
        {services.map(service => (
          <div key={service.id} className='col-lg-4 col-md-6 mb-4 servicio_Info'>
            <hr className="styled-hr"/>
            <h1>{service.title}</h1>
            <div className='servicio_info_detalle'>
              <p>{service.exploreText}</p>
              <button
                onClick={() => openModal(service.title, service.modalContent, service.img)}
                className='btn btn-outline-warning'
              >
                <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className=''>
        <Link to="/serviceDos" className='btn btn-sm float-right' style={{ fontSize: '0.6rem', backgroundColor: '#35FFA8', color: 'white', width: '35px' }}>+</Link>
      </div>

      <Modal
        show={modalOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
        img={modalContent.img}
      />
    </div>
  );
}

export default Service;
 