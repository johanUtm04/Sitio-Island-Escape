import gameCoverImage from '../assets/boxart3.jpg'; 
import mobileLogoUrl from '../assets/mobile_app_logo.jpg';
import '../css/Download.css';

function Download() {
  return (
    <div className="download-page-wrapper">
        <section className="game-details-section">
            <div className="section-divider">
            <hr className="divider-line" />
            <span className="divider-text">PC</span>
            <hr className="divider-line" />
            </div>
            <h1 className="game-title">
                Island Escape - Descarga Gratuita (Versión PC)
            </h1>
            <div className="game-content-container">
                <div className="image-column">
                    <img src={gameCoverImage} alt="Carátula de Island Escape" className="game-cover-image" />
                </div>
                <div className="info-column">
                    <div className="metadata-row">
                        <span className="metadata-label">Categorías:</span>
                        <span className="metadata-value metadata-links">
                            Acción, Aventura, Supervivencia, Indie, Shooter
                        </span>
                    </div>
                    <div className="metadata-row">
                        <span className="metadata-label">Etiquetas:</span>
                        <span className="metadata-value metadata-links">Gratis, Juego Indie, Shooter</span>
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
                        <span className="metadata-value">Lunes, 28 Nov 2024</span>
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
                Adéntrate en la intensa acción de Island Escape, un emocionante juego donde un comando de élite debe sobrevivir y escapar de una isla infestada de enemigos. Con armamento pesado y la jungla como tu única aliada, cada misión es un pulso por la supervivencia.
            </p>
            <div className="action-buttons-container">
                <button className="discord-button">DESCARGAR AQUÍ (PC)</button>
            </div>
            
            <div className="section-divider">
                <hr className="divider-line" />
                <span className="divider-text">Guía Móvil (Apk) + tips de juego</span>
                <hr className="divider-line" />
            </div>

            <h1 className="game-title mobile-title">
                Island Escape - Móvil (APK) + Tips de Juego
            </h1>
            <div className="game-content-container">
                <div className="image-column mobile-image-column">
                    <img src={mobileLogoUrl} alt="Logo de Descarga Móvil" className="mobile-logo-image" />
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
                        <span className="metadata-value">4 GB RAM, Snapdragon 730+</span>
                    </div>
                    
                    <h2 className="tips-title">Guía de Inicio Rápido y Tips</h2>
                    <ul className="game-tips-list">
                        <li>**Tip de Combate:** Usa el sigilo en la jungla; el ruido atrae grupos grandes.</li>
                        <li>**Recursos:** Prioriza el agua embotellada y las baterías para el visor nocturno.</li>
                        <li>**Movilidad:** La tirolesa desbloquea rutas rápidas de escape y emboscada.</li>
                        <li>**Recuerda, no olvides el prototipo de energía:**</li>
                    </ul>
                </div>
            </div>
            <div className="action-buttons-container">
                <button className="discord-button support-button">DESCARGAR AQUI APK</button>
            </div>
        </section>
    </div>
  );
}

export default Download;