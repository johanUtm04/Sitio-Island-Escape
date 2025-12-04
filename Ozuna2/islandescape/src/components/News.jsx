import news1 from '../assets/news_1.webp';
import news2 from '../assets/news_2.webp';
import news3 from '../assets/news_3.webp';

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
<style>
{`
.news-item {
  padding: 15px;
  background: #0f0f0f;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 255, 90, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.news-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 12px;
}

.news-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #92e78a;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.news-description {
  font-size: 0.95rem;
  color: #d4d4d4;
  text-align: justify;
  line-height: 1.6;
}

.news-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 18px rgba(0, 255, 90, 0.25);
}
`}
</style>
