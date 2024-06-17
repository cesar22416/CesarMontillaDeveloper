// src/components/ContenidoEducativo.jsx

import React from 'react';
import './cont.css';
import CodeExample from '../code/CodeExample';

const ContenidoEducativo = () => {
  const tutoriales = [
    {
      id: 1,
      fecha: '19. November 2016',
      imagen: 'https://lh3.googleusercontent.com/-sLx6F19lQII/UlPrUg7BAnI/AAAAAAAAAhM/XuVdCCKULUc/s632/CU01043D_4.png',
      titulo: 'Centrar un div',
      contenido: 'Flexbox es un sistema de diseño avanzado que puede utilizarse para alinear elementos en cualquier dirección. Para utilizarlo para centrar un div, es necesario establecer la propiedad flex-direction a column y la justify-content a center. El siguiente ejemplo muestra cómo utilizar esta técnica:',
    },
    {
      id: 2,
      fecha: 'No especificada',
      imagen: 'https://via.placeholder.com/150', // Imagen de reemplazo si no hay una imagen específica
      titulo: 'Gestión de Estado con Redux',
      contenido: 'Artículo avanzado sobre la gestión de estado en aplicaciones React usando Redux y buenas prácticas.',
    },
  ];

  const cssCode = `
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
  `;

  return (
    <div className='boxcont'>
      <h2>Contenido Educativo de Calidad</h2>
      
      {tutoriales.map((tutorial) => (
        <div key={tutorial.id} className='tutorial'>
          <p>{tutorial.fecha}</p>
          <h3>{tutorial.titulo}</h3>
          <img src={tutorial.imagen} alt={tutorial.titulo} />
          <p>{tutorial.contenido}</p>
          <h2>Ejemplo de Código CSS</h2>
      <CodeExample codeString={cssCode} language="css" />
        </div>
      ))}

      
    </div>
  );
};

export default ContenidoEducativo;
