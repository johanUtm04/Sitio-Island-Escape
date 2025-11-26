import { useState } from 'react';
import charImage1 from '../assets/personaje1.webp'; 
import charImage2 from '../assets/personaje2.webp'; 
import charImage3 from '../assets/personaje3.webp'; 
import '../css/Character.css'; 

const CHARACTERS_DATA = 
[
  { 
    id: 1, 
    name: 'JOJO', 
    imgSrc: charImage1, 
    description: 'Un linaje de héroes con un destino bizarro, los Joestar se enfrentan a fuerzas oscuras a través de generaciones.',
    details: [
      { label: 'Rango', value: 'Guerrero' }, 
      { label: 'Misiones', value: '10 victorias' }, 
      { label: 'Afiliación', value: 'Army' }
    ]
  },
  { 
    id: 2, 
    name: 'Aztaroths', 
    imgSrc: charImage2, 
    description: 'Malvados soldados alienígenas que tratan de acabar con JOJO. Son muy fuertes y suelen ir en grupo, será mejor no toparse con ellos.',
    details: [
      { label: 'Misión', value: 'Conquistar el mundo' }, 
      { label: 'Clase de enemigo', value: 'Malvado, agresivo' }, 
      { label: 'Afiliación', value: 'Cobra' }
    ]
  }
];

function CharacterCard({ character }) {
  return (
    <div className="character-card-content"> 
      <div className="character-image-box">
        <img src={character.imgSrc} alt={character.name} className="character-image" />
      </div>
      <div className="content">
        <h3>{character.name}</h3>
        <p className="description">{character.description}</p>
      </div>
      <footer className={`footer footer-card-${character.id}`}>
        {character.details.map((detail, index) => (
          <div key={index} className="details">
            <h6>{detail.label}</h6>
            <p>{detail.value}</p>
          </div>
        ))}
      </footer>
    </div>
  );
}

function Characters() {

  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = CHARACTERS_DATA.length;

  const plusSlides = (n) => {
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex > totalSlides) {
        newIndex = 1;
      }
      if (newIndex < 1) {
        newIndex = totalSlides;
      }
      return newIndex;
    });
  };

  return (
  <section className="characters-section" id="seccion-personajes">
      <h2 className="section-title">Personajes</h2>
      
      <div className="characters-container-wrapper"> 
        
        <button className="slide prev" onClick={() => plusSlides(-1)}>&lt;</button>

        <div className="container border1 slideshow-container">
          
          {CHARACTERS_DATA.map((character, index) => {
            const currentSlide = index + 1;
            
            return (
              <section 
                key={character.id}
                className={`mySlides fade`} 
                style={{ 
                  display: currentSlide === slideIndex ? 'block' : 'none' 
                }}
              >
                <CharacterCard character={character} />
              </section>
            );
          })}
        </div>

        <button className="slide next" onClick={() => plusSlides(1)}>&gt;</button>
        
      </div>
    </section>
  );
}

export default Characters;