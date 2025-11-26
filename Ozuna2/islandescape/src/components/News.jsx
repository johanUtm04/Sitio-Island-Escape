import news1 from '../assets/news_1.webp';
import news2 from '../assets/news_2.webp';
import news3 from '../assets/news_3.webp';

function NewsItem({ imageSrc }) {
  return (
    <div className="news-item">
      <img src={imageSrc} alt="Noticia" className="news-image" />
      <div className="news-text-placeholder"></div>
      <div className="news-text-placeholder"></div>
      <div className="news-text-placeholder short"></div>
    </div>
  );
}

function News() {
  return (
    <section className="news-section">
      <h2 className="section-title">Noticias</h2>
      <div className="news-container">
        <NewsItem imageSrc={news1} loading="lazy"/>
        <NewsItem imageSrc={news2} loading="lazy"/>
        <NewsItem imageSrc={news3} loading="lazy" />
      </div>
    </section>
  );
}

export default News;