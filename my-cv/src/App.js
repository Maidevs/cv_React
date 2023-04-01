import { useState } from 'react';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Tecnologias from './components/Tecnologias/Tecnologias';
import './App.css';
import {CV} from "./CV/CV";

const {hero, education, expirience, tecnologias, about} = CV;


function App() {
  const [showHero, setShowHero] = useState("1");

  return (
    <div className="App">
      {/* Con eventos Onclick nos movemos de paginas,sin rutas. Pero el us.Final entenderá que es navegador. */}
      <div className='buttons'>
        <button className='btn1' onClick={() => setShowHero("1")}> Inicio </button>
        <button className='btn1' onClick={() => setShowHero("2")}> Tools </button>
        <button className='btn1' onClick={() => setShowHero("3")}> Experiencia </button>
        <button className='btn1' onClick={() => setShowHero("4")}> Formación </button>
        <button className='btn1' onClick={() => setShowHero("5")}> About </button>
      </div>
 {/* Aquí vamos indicando a los botones el componente a mostrar */}
      <div className='principal'>
        {showHero === "1" ? 
        (<Hero hero={hero}/>) :
        showHero === "2" ? 
        (<Tecnologias tecnologias={tecnologias}/>) :
        showHero === "3" ? 
        (<Experience experience={expirience}/>) :
        showHero === "4" ?
        (<Education education={education}/>) :
        showHero === "5" ?
        (<About about={about}/>) :
        (<Hero hero={hero}/>)}
      </div>

    </div>
  );
}

export default App;
