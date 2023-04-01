import React from 'react';
// import PropTypes from 'prop-types';
import styles from './About.module.css';


//Aqui vamos a introducir directamente lo que queremos que se ve.
//Así que no tendrá ni return ni utlizaremos props, ya que va a mostrar directamente, lo que yo quiero en html.

const About = () => {
  return(
  <div className={styles.About}>
   

    <div className='divPadreAbout'>
      <div className='idiomas'>
        <h3>Idiomas</h3>
        <ul>
          <li>Castellano: Nativo </li>
          <li>Catalán: Nativo </li>
          <li>Inglés: Intermedio </li>
          <li>Poular de Senegal: Nativo</li>
        </ul>
      </div>
      <div className='fotoAbout'>
        <img className='fotoSoyYo' 
        src='https://www.neo2.com/wp-content/uploads/2020/01/dioses-negros-moda-temis-19.jpg' 
        alt='alterEgo'/>
      </div>
      <div className='skills'>
        <h3>Soft Skills</h3>
        <ul>
          <li>Empática </li>
          <li>Resolutiva </li>
          <li>Cooperación </li>
          <li>Resiliente</li>
          <li>Inconformista</li>
          <li>Pensamiento Crítico</li>
          <li>Creativa</li>
          <li>Honesta</li>
          <li>Proactiva</li>
        </ul>
      </div>
      <div className='descripcion'>
        <p>"Conecto mucho con las personas, busco soluciones a los problemas y trabajar en equipo. Creo que son habilidades fundamentales en cualquier trabjo y sector, pero en especial en el IT, donde la empatía es importante para comprender las necesidades de los usuarios, y compañeros. Además de la resolución de problemas y la capacidad de trabajar en equipo son habilidades clave en el desarrollo de proyectos. 
        La resiliencia, el pensamiento crítico y la creatividad también son habilidades importantes en el mundo tecnológico, y la honestidad y la proactividad son fundamentales para el éxito en cualquier proyecto tecnológico. 
        Gracias a trabajar varios años cara al público las he podido potenciar y desarollar nuevas habilidades sociales que puedo aplicar en el equipo, además de las habilidades aprendidas en los deportes que he practicado a lo largo de mi vida".
        </p>
      </div>
    </div>
    
  </div>
  )
};

// About.propTypes = {};

// About.defaultProps = {};

export default About;
