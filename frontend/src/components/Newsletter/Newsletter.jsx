import React, { useState, useRef } from 'react';
import './Newsletter.css';
import bi from '../../assets/bi.jpg';

function News() {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const carouselRef = useRef(null);
  
  // Trier les actualités par date (plus récentes en premier)
  const newsData = [
    {
      id: "news-1",
      title: "Microsoft 𝐝𝐞́𝐯𝐨𝐢𝐥𝐞 𝐌𝐚𝐣𝐨𝐫𝐚𝐧𝐚 𝟏 : 𝐬𝐚 𝐩𝐫𝐞𝐦𝐢𝐞𝐫𝐞 𝐩𝐮𝐜𝐞 𝐪𝐮𝐚𝐧𝐭𝐢𝐪𝐮𝐞 !",
      date: "2025-03-01",
      content: "Après 20 ans de recherche, Microsoft a présenté 𝐌𝐚𝐣𝐨𝐫𝐚𝐧𝐚 𝟏, sa première puce quantique, rendant possible des calculs inaccessibles aux ordinateurs classiques. 𝐔𝐧𝐞 𝐩𝐮𝐢𝐬𝐬𝐚𝐧𝐜𝐞 𝐢𝐧𝐞́𝐠𝐚𝐥𝐞́𝐞 : Contrairement aux bits (0 ou 1), les qubits permettent des calculs simultanés, décuplant la rapidité et la complexité des opérations.",
      image: bi
    },
    {
      id: "news-2",
      title: "𝐓𝐫𝐮𝐦𝐩 𝐯𝐬. 𝐌𝐞𝐭𝐚 : 𝐔𝐧 𝐫𝐞̀𝐠𝐥𝐞𝐦𝐞𝐧𝐭 𝐡𝐢𝐬𝐭𝐨𝐫𝐢𝐪𝐮𝐞 𝐚̀ 𝟐𝟓 𝐦𝐢𝐥𝐥𝐢𝐨𝐧𝐬 𝐝𝐞 𝐝𝐨𝐥𝐥𝐚𝐫𝐬", 
      date: "2025-03-02",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: bi
    },
    {
      id: "news-3",
      title: "𝐒𝐨𝐦𝐦𝐞𝐭 𝐩𝐨𝐮𝐫 𝐥'𝐀𝐜𝐭𝐢𝐨𝐧 𝐬𝐮𝐫 𝐥'𝐈𝐀 𝐚̀ 𝐏𝐚𝐫𝐢𝐬 : 𝐋𝐞𝐬 𝐏𝐨𝐢𝐧𝐭𝐬 𝐂𝐥𝐞́𝐬 ",
      date: "2025-03-03", 
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: bi
    },
    {
      id: "news-4",
      title: "𝐂𝐨̂𝐭𝐞 𝐝'𝐈𝐯𝐨𝐢𝐫𝐞 : 𝐋'𝐀𝐍𝐒𝐒𝐈 𝐥𝐚𝐧𝐜𝐞 𝐨𝐟𝐟𝐢𝐜𝐢𝐞𝐥𝐥𝐞𝐦𝐞𝐧𝐭 𝐬𝐞𝐬 𝐚𝐜𝐭𝐢𝐯𝐢𝐭𝐞́𝐬 𝐞𝐧 𝐥𝐢𝐠𝐧𝐞 !",
      date: "2025-02-28", 
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: bi
    },
    {
      id: "news-5",
      title: "𝐂𝐲𝐛𝐞𝐫𝐬𝐞́𝐜𝐮𝐫𝐢𝐭𝐞́ : 𝐋𝐞 𝐁𝐮𝐫𝐤𝐢𝐧𝐚 𝐅𝐚𝐬𝐨 𝐩𝐚𝐬𝐬𝐞 𝐚̀ 𝐥’𝐚𝐜𝐭𝐢𝐨𝐧 ! ",
      date: "2025-02-25", 
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: bi
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setEmail('');
      setShowThankYou(true);
      
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    } else {
      alert('Please enter a valid email address');
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Fonction pour créer une page HTML complète pour l'article
  const createArticlePage = (article) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${article.title}</title>
        <style>
          body {
            font-family: 'Rajdhani', sans-serif, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #0a0a45;
          }
          .article-date {
            color: #666;
            margin-bottom: 20px;
          }
          .article-image {
            width: 100%;
            max-height: 400px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .article-content {
            font-size: 18px;
          }
          .back-link {
            display: inline-block;
            margin-top: 30px;
            color: #0a0a45;
            text-decoration: none;
          }
          .back-link:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>${article.title}</h1>
        <div class="article-date">Publié le ${new Date(article.date).toLocaleDateString()}</div>
        <img src="${article.image}" alt="${article.title}" class="article-image">
        <div class="article-content">
          ${article.content}
        </div>
        <a href="javascript:window.close();" class="back-link">Retour aux actualités</a>
      </body>
      </html>
    `;
  };

  // Fonction pour ouvrir l'article dans un nouvel onglet
  const openArticle = (article) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(createArticlePage(article));
      newWindow.document.close();
    }
  };

  return (
    <section className="news-section">
      <h2 className="news-title">Latest News</h2>
      
      <div className="news-carousel-container">
        <button className="carousel-nav carousel-prev" onClick={scrollLeft} aria-label="Previous">
          &#10094;
        </button>
        
        <div className="news-carousel" ref={carouselRef}>
          {newsData.map((news) => (
            <div key={news.id} className="news-card">
              <h3 className="news-card-title">{news.title}</h3>
              <p className="news-card-date">{new Date(news.date).toLocaleDateString()}</p>
              <div className="news-card-image-container">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="news-card-image" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <div className="news-card-overlay">
                  <button 
                    className="read-more-button"
                    onClick={() => openArticle(news)}
                  >
                    Lire l'article
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-nav carousel-next" onClick={scrollRight} aria-label="Next">
          &#10095;
        </button>
      </div>

      <div className="newsletter-subscribe">
        {showThankYou ? (
          <div className="thank-you-message">
            Merci de faire partie de notre communauté de DigiScientists !
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email" 
              className="newsletter-email-input"
              required
            />
            <button type="submit" className="subscribe-button">
              Subscribe to Newsletter
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default News;