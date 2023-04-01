import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Hero.module.css';

const Hero = ({hero}) => (
  <div className={styles.Hero}>
    <div className='enlacesGit'>
      <a
        className='git'
        title='Github'
        href='https://github.com/Beaut3ch'>
      <img
        src='https://octodex.github.com/images/daftpunktocat-guy.gif'
        alt='Beaut3ch'/>
      </a>
      <a className='linkedin' title='Linkedin' href='https://www.linkedin.com/in/mairamjawo/'>
          <img
            src='https://media.tenor.com/8q8PYGT5jW0AAAAd/linkedin-teameasil.gif'
            alt='Beaut3ch'
          />
      </a>
  </div>
  <div className='cardMain'>
    <div className='fotoPortada'>
      <img src={hero.image} alt=''/>
  </div>
    
  <div className='saludoInfo'>
    <h1 className='name'> 
      ¡Bienvenid@! Soy {hero.name},</h1>
    <h2>{hero.info},</h2>
    <h4>{hero.email}</h4>
  </div>
    </div>
  </div>
);

// Hero.propTypes = {};

// Hero.defaultProps = {};

export default Hero;
