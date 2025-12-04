import '../css/About.css'; 
import axelFoto from '../assets/Axel foto.jpg';
import albertoFoto from '../assets/foto alberto.jpg';
import wichoFoto from '../assets/wicho.jpg';
import wichitoFoto from '../assets/wichito foto.jpg'; 

function About() {
  return (
    <section className="about-section" id="acerca-de">
      <h2 className="section-title">Acerca de NexusTech</h2>
      
      <div className="about-content">
        <p>
          En <strong>NexusTech</strong> somos un equipo apasionado por la tecnología, la creatividad y el desarrollo de videojuegos de alta calidad. 
          Nuestro propósito es construir experiencias inmersivas que conecten con los jugadores y los transporten a mundos llenos de aventura.
        </p>

        <p>
          Cada uno de nuestros proyectos nace del trabajo conjunto entre desarrolladores, diseñadores y artistas que comparten la visión de crear universos únicos. 
          Valoramos la innovación, la dedicación y la calidad en cada detalle.
        </p>

        <p>
          Gracias por acompañarnos en este camino. En NexusTech seguimos creciendo y creando nuevas experiencias para ti. 
          <strong>¡Lo mejor aún está por venir!</strong>
        </p>
      </div>

      <h3 className="team-title">Conoce a nuestro equipo de trabajo</h3>

      <div className="team-container">

 {/* Juan Alberto Zavala Medina */}
        <div className="team-member">
          <img src={albertoFoto} className="member-image" alt="Juan Alberto Zavala Medina" />
          <h4 className="member-name">Juan Alberto Zavala Medina</h4>
          <p className="member-role">Jefe de Proyecto</p>
          <p className="member-desc">
            Encargado del diseño, arquitectura y lógica del proyecto.
          </p>
        </div>

        {/* Luis Eduardo García San Juan */}
        <div className="team-member">
          <img src={wichoFoto} className="member-image" alt="Luis Eduardo Garcia San Juan" />
          <h4 className="member-name">Luis Eduardo Garcia San Juan</h4>
          <p className="member-role">Diseño UI/UX</p>
          <p className="member-desc">
            Diseñador del estilo visual e interfaz del videojuego.
          </p>
        </div>
        
        {/* Luis Enrique Ibarra Avalos */}
        <div className="team-member">
          <img src={wichitoFoto} className="member-image" alt="Luis Enrique Ibarra Avalos" />
          <h4 className="member-name">Luis Enrique Ibarra Avalos</h4>
          <p className="member-role">Programador Backend</p>
          <p className="member-desc">
            Encargado del backend, la API, bases de datos y servicios.
          </p>
        </div>

        {/* Axel Gabriel González Martínez */}
        <div className="team-member">
          <img src={axelFoto} className="member-image" alt="Axel Gabriel Gonzalez Martinez" />
          <h4 className="member-name">Axel Gabriel Gonzalez Martinez</h4>
          <p className="member-role">QA Tester</p>
          <p className="member-desc">
            Especialista en pruebas, rendimiento y aseguramiento de calidad.
          </p>
        </div>

       

      </div>
    </section>
  );
}

export default About;
