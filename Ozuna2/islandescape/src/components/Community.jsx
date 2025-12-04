import '../css/Community.css';
import gameplayVideo from "../assets/gameplay.mp4"; 

function Community() {
  
  const leaderBoardData = [
    { rank: 1, name: 'Comando_JOJO', score: 15480, kills: 489 },
    { rank: 2, name: 'AztarothSlayer', score: 13990, kills: 395 },
    { rank: 3, name: 'JungleViper', score: 12550, kills: 350 },
    { rank: 4, name: 'NeonSamurai', score: 10875, kills: 301 },
    { rank: 5, name: 'AztaBossKiller', score: 9900, kills: 275 },
  ];

  return (
    <section className="community-section" id="seccion-comunidad">
      <h2 className="section-title">Comunidad: El Frente de Batalla</h2>

      <div className="community-grid">

        {/* --- DISCORD WIDGET --- */}
        <div className="discord-widget-box">
          <h3 className="widget-title">Únete a la Base de Operaciones</h3>
          <p className="widget-subtitle">Conéctate con otros supervivientes y coordina tu próxima misión.</p>
          
          <div className="discord-iframe-placeholder">
            <p>Widget de Discord aquí (Chats, Miembros, etc.)</p>
          </div>
          
          <button className="discord-join-button">
            ACCESO INMEDIATO AL DISCORD
          </button>
        </div>

        {/* --- LIVE GAMEPLAY BOX --- */}
        <div className="live-feed-box">
          <h3 className="widget-title live-title" style={{ color: "#92e78aff" }}>
            🎮 Gameplay demostrativo de Island Escape
          </h3>
          
          <p className="widget-subtitle">¡Mira a los mejores jugadores en acción ahora mismo!</p>

          <div className="live-stream-placeholder">
            <video 
              src={gameplayVideo}
              className="live-stream-gif"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          
          <div className="streamer-info">
            <span className="live-indicator">LIVE</span>
            <span className="streamer-name">
              Canal de Youtube 📹: <a href="#streamer-link">GuerreroNeón</a>
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Community;
