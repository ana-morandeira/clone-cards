import '../styles/Testimonio.css';

const imagenes = import.meta.glob('../assets/img/*.png', {
  eager: true,
  import: 'default'
});

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={imagenes[`../assets/img/${props.imagen}.png`]}
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