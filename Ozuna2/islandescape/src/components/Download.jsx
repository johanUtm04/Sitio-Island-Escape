import gameCoverImage from '../assets/boxart3.webp';
import mobileLogoUrl from '../assets/mobile_app_logo.webp';
import '../css/Download.css';

function Download() {
  return (
    <div className="download-page-wrapper">
      
      {/* ===================== PC SECTION ===================== */}
      <section className="game-details-section">
        <div className="section-divider">
          <hr className="divider-line" />
          <span className="divider-text">PC</span>
          <hr className="divider-line" />
        </div>

        <h1 className="game-title">Island Escape - Descarga Gratuita (Versión PC)</h1>

        <div className="game-content-container">
          <div className="image-column">
            <img 
              src={gameCoverImage} 
              alt="Carátula de Island Escape" 
              className="game-cover-image" 
              loading="lazy" 
            />
          </div>

          <div className="info-column">
            <div className="metadata-row">
              <span className="metadata-label">Categorías:</span>
              <span className="metadata-value metadata-links">
                Acción, Aventura, Supervivencia, Indie
              </span>
            </div>

            <div className="metadata-row">
              <span className="metadata-label">Etiquetas:</span>
              <span className="metadata-value metadata-links">
                Juego Indie y plataformero
              </span>
            </div>

            <div className="metadata-row">
              <span className="metadata-label">Publicado por:</span>
              <span className="metadata-value link-style">NexusTech</span>
            </div>

            <div className="metadata-row">
              <span className="metadata-label">Comentarios:</span>
              <span className="metadata-value">0</span>
            </div>

            <div className="metadata-row">
              <span className="metadata-label">Fecha de subida:</span>
              <span className="metadata-value">Lunes, 8 Dic 2025</span>
            </div>

            <div className="metadata-row">
              <span className="metadata-label">Versión:</span>
              <span className="metadata-value">1.0.0</span>
            </div>

            <div className="metadata-row">
              <span className="metadata-label">Región:</span>
              <span className="metadata-value">Global - Español/Inglés</span>
            </div>
          </div>
        </div>

        <p className="game-description">
          Adéntrate en la intensa acción de Island Escape, un emocionante juego 
          donde un comando de élite debe sobrevivir y escapar de una isla infestada
          de enemigos. Con armamento pesado y la jungla como tu única aliada, 
          cada misión es un pulso por la supervivencia.
        </p>

        {/* BOTÓN DESCARGA PC */}
        <div className="action-buttons-container">
          <a
            href="https://github.com/Axelg728/Island-Escape-Videojuego/archive/refs/heads/main.zip"
            className="download-btn"
            download
          >
            DESCARGAR AQUÍ (PC)
          </a>
        </div>

        {/* ---------------- MOBILE SECTION ---------------- */}
        <div className="section-divider">
          <hr className="divider-line" />
          <span className="divider-text">Guía Móvil (APK) + Tips de juego</span>
          <hr className="divider-line" />
        </div>

        <h1 className="game-title mobile-title">
          Island Escape - Móvil (APK) + Tips de Juego
        </h1>

        <div className="game-content-container">
          <div className="image-column mobile-image-column">
            <img 
              src={mobileLogoUrl} 
              alt="Logo de Descarga Móvil" 
              className="mobile-logo-image" 
              loading="lazy"
            />
            <p className="mobile-note">Optimizado para dispositivos de alta gama. Requiere Android 10+.</p>
          </div>

          <div className="info-column">
            <div className="metadata-row">
              <span className="metadata-label">Plataforma:</span>
              <span className="metadata-value">Android (APK)</span>
            </div>

            <div className="metadata-row">
              <span className="metadata-label">Tamaño:</span>
              <span className="metadata-value">950 MB</span>
            </div>

            <div className="metadata-row">
              <span className="metadata-label">Requisitos:</span>
              <span className="metadata-value">Android 8 o superior</span>
            </div>

            <h2 className="tips-title">Guía de Inicio Rápido y Tips</h2>

            <ul className="game-tips-list">
              <li><strong>Tip de Combate:</strong> Usa el sigilo en la jungla; el ruido atrae grupos grandes.</li>
              <li><strong>Recursos:</strong> Prioriza el agua embotellada y las baterías para el visor nocturno.</li>
              <li><strong>Movilidad:</strong> La tirolesa desbloquea rutas rápidas de escape y emboscada.</li>
              <li><strong>Importante:</strong> No olvides recolectar el prototipo de energía.</li>
            </ul>
          </div>
        </div>

        {/* BOTÓN DESCARGA APK */}
        <div className="action-buttons-container">
  <a
    href="/downloads/island-escape.apk"
    className="download-btn"
    download
  >
    DESCARGAR AQUÍ (APK)
  </a>
</div>

      </section>
    </div>
  );
}

export default Download;
