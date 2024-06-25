import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './Service.css';

const services = [
  {
    id: 1,
    title: 'Layout of web pages',
    exploreText: 'Explore',
    modalContent: 'Me  apasiona crear sitios web que no solo sean visualmente atractivos, sino también funcionales y fáciles de navegar. Nos especializamos en entender las necesidades de nuestros clientes y transformarlas en interfaces digitales que cautiven a los usuarios desde el primer clic. Desde el diseño inicial hasta la implementación final, nos comprometemos a integrar las últimas tendencias y mejores prácticas de diseño para asegurar que cada elemento del sitio web no solo luzca bien, sino que también cumpla con tus objetivos comerciales. Déjanos ayudarte a construir una presencia digital que no solo impresione, sino que también impulse el crecimiento de tu negocio en línea.',
    img: ''
  },
  {
    id: 2,
    title: 'User interface design',
    exploreText: 'Explore',
    modalContent: 'Como diseñador de interfaces de usuario, mi objetivo es crear experiencias digitales que sean tanto estéticamente agradables como intuitivas. Me especializo en entender las necesidades únicas de mis clientes y transformarlas en interfaces que no solo se vean bien, sino que también sean fáciles y agradables de usar. Desde el primer esbozo hasta la implementación final, me aseguro de que cada detalle contribuya a una experiencia de usuario fluida y satisfactoria. Utilizo las últimas tendencias y técnicas de diseño para asegurarme de que tu producto digital no solo destaque visualmente, sino que también cumpla con tus objetivos comerciales. Permíteme ayudarte a crear una interfaz que no solo impresione a tus usuarios, sino que también mejore significativamente la usabilidad y la eficiencia de tu aplicación o sitio web.',
    img: ''
  },
  {
    id: 3,
    title: 'Mobile application development',
    exploreText: 'Explore',
    modalContent: 'Como desarrollador de aplicaciones móviles, me dedico a crear soluciones digitales que sean tanto innovadoras como funcionales. Me apasiona trabajar mano a mano contigo para convertir tus ideas en aplicaciones móviles robustas y efectivas. Desde la planificación inicial hasta el lanzamiento en las tiendas de aplicaciones, me comprometo a utilizar las últimas tecnologías y prácticas de desarrollo para garantizar que tu aplicación no solo cumpla, sino que supere tus expectativas y las de tus usuarios. Con un enfoque centrado en la experiencia del usuario y la calidad del código, estoy aquí para ayudarte a alcanzar tus metas digitales y llevar tu visión al siguiente nivel móvil',
    img: ''
  }
];

const ServiceDos = () => {
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
      

        {/* Imagen */}
        <div className='col-lg-4 col-md-6 mb-4 servicio_imagen'>
          <div className='servimg'>
            <img className='imgservi medimg sinmedi' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/developer.png?alt=media&token=637c13e8-918a-47ea-a68c-49c01acc3409" alt="Developer" />
          </div>
        </div>

        <div className='col-lg-8'>
          <div className='row'>
            {services.map(service => (
              <div key={service.id} className='col-lg-4 col-md-6 mb-4 servicio_Info'>
                  <hr className="styled-hr"/>
                  <h1>{service.title}</h1>
                  <div className='servicio_info_detalle'>
                    <p>{service.exploreText}</p>
                    <button
                      onClick={() => openModal(service.title, service.modalContent, service.img)}
                      className='btn btn-outline-warning'>
                      <i className="bi bi-arrow-right-short"></i>
                    </button>
                  </div>
              </div>
            ))}
          </div>
       

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

export default ServiceDos;
