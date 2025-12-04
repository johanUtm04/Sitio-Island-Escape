import news1 from '../assets/news_1.jpg';
import news2 from '../assets/news_2.webp';
import news3 from '../assets/news_3.webp';
import '../css/News.css'; // ⬅️ Importa los estilos recomendados

function NewsItem({ imageSrc, title, description }) {
  return (
    <div className="news-item">
      <img src={imageSrc} alt="Noticia" className="news-image" />

      <h3 className="news-title">{title}</h3>

      <p className="news-description">
        {description}
      </p>
    </div>
  );
}

function News() {
  return (
    <section className="news-section">
      <h2 className="section-title">Noticias</h2>

      <div className="news-container">
        <NewsItem
          imageSrc={news1}
          title="Nuevas armas añadidas al arsenal"
          description="El escuadrón ha recibido armamento actualizado para enfrentar las amenazas crecientes en la isla."
        />

        <NewsItem
          imageSrc={news2}
          title="Descubren una antigua ruina secreta"
          description="Exploradores encontraron una estructura misteriosa que podría cambiar el rumbo de la misión."
        />

        <NewsItem
          imageSrc={news3}
          title="Nueva amenaza mecanizada detectada"
          description="Un robot de combate nunca antes visto ha sido identificado patrullando la zona norte."
        />
      </div>
    </section>
  );
}

export default News;
