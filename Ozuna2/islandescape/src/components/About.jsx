import '../css/About.css'; 

function About() {
  return (
    <section className="about-section" id="acerca-de">
      <h2 className="section-title">Acerca de NexusTech</h2>
      
      <div className="about-content">
        <p>
          En <strong>NexusTech</strong> somos un equipo apasionado por la innovación y el desarrollo de videojuegos de alta calidad. 
          Nuestro objetivo es crear experiencias inmersivas que desafíen la imaginación y entretengan a jugadores de todo el mundo.
        </p>

        <p>
          Nuestro equipo está compuesto por desarrolladores, diseñadores y creativos que trabajan en conjunto para ofrecer proyectos sólidos y emocionantes. 
          Valoramos la dedicación, la creatividad y el compromiso con nuestros jugadores.
        </p>

        <p>
          Gracias por apoyarnos y formar parte de esta aventura. ¡En NexusTech siempre estamos listos para llevarte a nuevos mundos!
        </p>
      </div>

      <h3 className="team-title">Conoce a nuestro equipo de trabajo</h3>

      <div className="team-container">
        <div className="team-member">
          <div className="member-image-placeholder"></div>
          <h4 className="member-name">1</h4>
          <p className="member-role">Concepto</p>
        </div>

        <div className="team-member">
          <div className="member-image-placeholder"></div>
          <h4 className="member-name">2</h4>
          <p className="member-role">Concepto</p>
        </div>

        <div className="team-member">
          <div className="member-image-placeholder"></div>
          <h4 className="member-name">3</h4>
          <p className="member-role">Concepto</p>
        </div>

        <div className="team-member">
          <div className="member-image-placeholder"></div>
          <h4 className="member-name">4</h4>
          <p className="member-role">Concepto</p>
        </div>
      </div>
    </section>
  );
}

export default About;