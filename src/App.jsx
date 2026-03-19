import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
      
      <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='Emma' // Esto buscará "Testimonio-Emma.png"
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
      />

      <Testimonio
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='Shawn' // Esto buscará "Testimonio-Shawn.png"
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
      />

      <Testimonio
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='Sarah' // Esto buscará "Testimonio-Sarah.png"
        cargo='Ingeniera de Software'
        empresa='ChatDesk'
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel de principiante total hasta un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo como desarrolladora en una empresa increíble.'
      />
    </div>
  );
}

export default App;