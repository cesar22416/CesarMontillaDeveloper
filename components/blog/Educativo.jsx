import React from 'react';
import './cont.css';  // Assuming this file contains necessary styles
import CodeExample from '../code/CodeExample';  // Assuming this path is correct

const Educativo = () => {
  const tutoriales = [
    {
      id: 1,
      fecha: '19. Diciembre 2023',  // Corrected date format
      imagen: 'https://lh3.googleusercontent.com/-sLx6F19lQII/UlPrUg7BAnI/AAAAAAAAAhM/XuVdCCKULUc/s632/CU01043D_4.png',
      titulo: 'Centrar un div',
      contenido: 'Flexbox es un sistema de diseño avanzado que puede utilizarse para alinear elementos en cualquier dirección. Para utilizarlo para centrar un div, es necesario establecer la propiedad flex-direction a column y la justify-content a center. El siguiente ejemplo muestra cómo utilizar esta técnica:', 
      codeExample: { codeString: `
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }`, language: 'css' }
    },
    {
      id: 2,
      fecha: '23. Enero 2024',  
      imagen: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*yhU3xtt7wXBtGNTJbO8G3Q.png',  // Placeholder image
      titulo: '¿Cuál es la diferencia entre React, Angular y Vue.js?',
      contenido: 'React, Angular and Vue.js son herramientas fundamentales en el desarrollo de interfaces de usuario para aplicaciones web modernas, pero difieren significativamente en sus enfoques y filosofías. React, desarrollado por Facebook, se destaca como una librería flexible y eficiente que se centra en la construcción de componentes reutilizables y utiliza un Virtual DOM para optimizar el rendimiento. Angular, creado por Google, es un framework completo que adopta un enfoque estructurado y proporciona un conjunto integral de herramientas, incluyendo características como inyección de dependencias y un sistema MVVM con TypeScript. Por otro lado, Vue.js se presenta como un framework progresivo que combina la reactividad de los datos con una curva de aprendizaje suave, permitiendo su adopción incremental y adaptándose tanto a pequeños proyectos como a aplicaciones más complejas. La elección entre React, Angular y Vue.js generalmente depende de los requisitos del proyecto, la experiencia del equipo y las preferencias de diseño y escalabilidad del desarrollo web.', 
      codeExample: { codeString: 
        `React
        npx create-react-app mi-aplicacion-react
        cd mi-aplicacion-react
        npm start,

        Vue.js
        npm install -g @vue/cli
        vue create mi-aplicacion-vue
        cd mi-aplicacion-vue
        npm run serve,

        Angular
        npm install -g @angular/cli
        ng new mi-aplicacion-angular
        cd mi-aplicacion-angular
        ng serve`}
    },
    {
      id:3,
      fecha: '01. Julio 2024',  
      imagen: 'https://lenguajejs.com/javascript/asincronia/promesas/promises.png',  // Placeholder image
      titulo: '¿Cómo trabajar con Promesas (Promises)?',
      contenido: 'Las Promesas son objetos que representan la eventual completitud (o falla) de una operación asíncrona, y son fundamentales para manejar flujos de datos asíncronos de manera más limpia y estructurada. Aquí tienes un ejemplo básico de cómo crear y usar una Promesa en JavaScript: ', 
      codeExample: { codeString: 
        `// Ejemplo de una función que retorna una Promesa
function hacerAlgo() {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asíncrona (por ejemplo, una solicitud HTTP)
        setTimeout(() => {
            let exito = true; // Cambiar a false para simular una falla
            if (exito) {
                resolve("¡Operación exitosa!"); // Resuelve la promesa si todo va bien
            } else {
                reject(new Error("¡Algo salió mal!")); // Rechaza la promesa en caso de error
            }
        }, 2000); // Simulamos un retardo de 2 segundos
    });
}

// Uso de la función que retorna una Promesa
hacerAlgo()
    .then(resultado => {
        console.log(resultado); // Operación exitosa
    })
    .catch(error => {
        console.error(error); // Manejo de errores
    });// Ejemplo de una función que retorna una Promesa
function hacerAlgo() {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asíncrona (por ejemplo, una solicitud HTTP)
        setTimeout(() => {
            let exito = true; // Cambiar a false para simular una falla
            if (exito) {
                resolve("¡Operación exitosa!"); // Resuelve la promesa si todo va bien
            } else {
                reject(new Error("¡Algo salió mal!")); // Rechaza la promesa en caso de error
            }
        }, 2000); // Simulamos un retardo de 2 segundos
    });
}

// Uso de la función que retorna una Promesa
hacerAlgo()
    .then(resultado => {
        console.log(resultado); // Operación exitosa
    })
    .catch(error => {
        console.error(error); // Manejo de errores
    });`}
    }
  ];

  return (
    <div className='boxcont'>
      {tutoriales.map((tutorial) => (
        <div key={tutorial.id} className='tutorial'>
          <div className='time'>
            <h3>{tutorial.titulo}</h3>
            <p>{tutorial.fecha}</p>
          </div>
          <img src={tutorial.imagen} alt={tutorial.titulo} />
          <p>{tutorial.contenido}</p>
          {tutorial.codeExample && (
            <div className='time'>
              <h2>Ejemplo</h2>
              <CodeExample
                codeString={tutorial.codeExample.codeString}
                language={tutorial.codeExample.language}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Educativo;
