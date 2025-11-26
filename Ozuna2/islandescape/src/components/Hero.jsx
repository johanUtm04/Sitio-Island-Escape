import bannerImage from '../assets/banner.webp';
import logo from '../assets/logo.webp';
import boxArt from '../assets/boxart.webp';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  const handleDownloadClick = () => {
    navigate('/descargar');
  };

  const heroStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '200px',
  };

  return (
    <section className="hero-section" style={heroStyle}>

      <div className="hero-content">
        <h1 className="hero-title">¡LISTO PARA LA ACCIÓN!</h1>
        <button
          className="download-button"
          onClick={handleDownloadClick}
        >
          DESCARGAR
        </button>
      </div>

      <div className="centered-hero-paragraph-container">
        <p className='paragraph-hero'>
          Adéntrate en la intensa acción de Island Escape, un emocionante juego <br />
          donde un comando de élite debe sobrevivir y escapar de una isla infestada de enemigos. <br />
          Con armamento pesado y la jungla como tu única aliada,<br />
          cada misión es un pulso por la supervivencia.
        </p>
      </div>
      
      <div className="hero-logo-box">
        <img src={logo} alt="Island Escape Logo" className="logo" loading="lazy" />
        <img src={boxArt} alt="Island Escape Box Art" className="box-art"loading="lazy" />
      </div>
    </section>
  );
}

export default Hero;