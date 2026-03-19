import React from 'react';
import '../styles/Testimonio.css';

function Testimonio(props) {
  // Esta línea construye la ruta correcta para Vite
  const rutaImagen = new URL(`../assets/img/Testimonio-${props.imagen}.png`, import.meta.url).href;

  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={rutaImagen} 
        alt={`Foto de ${props.nombre}`} 
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;