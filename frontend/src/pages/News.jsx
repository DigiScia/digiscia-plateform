import React, { useState, useEffect, useRef } from 'react';
import './News.css';
import fetchNews from "../services/newsService.js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function News() {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function getNews() {
      try {
        const data = await fetchNews();
        if (Array.isArray(data)) {
          setNewsData(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else {
          console.error("fetchNews() n'a pas retourné un tableau :", data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
      }
    }
    getNews();
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage('');
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/suscribers/", { email });
      setShowThankYou(true);
      setEmail('');
      setErrorMessage('');
    } catch (error) {
      console.error("Erreur lors de l'inscription à la newsletter :", error);
      
      if (error.response && error.response.data) {
        console.log("Données de l'erreur :", error.response.data);
        
        if (error.response.data.email && Array.isArray(error.response.data.email)) {
          setErrorMessage('Vous êtes déjà inscrit 😉!'); 
        } else {
          setErrorMessage('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        }
      } else if (error.request) {
        setErrorMessage('Impossible de joindre le serveur. Veuillez vérifier votre connexion internet.');
      } else {
        setErrorMessage('Une erreur s\'est produite. Veuillez réessayer.');
      }
    }
  };

  const scrollCarousel = (direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Supprimer les caractères spéciaux
      .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
      .replace(/--+/g, '-'); // Éviter les tirets multiples consécutifs
  };

  const handleReadArticle = (news) => {
    const slug = createSlug(news.title);
  
    // Stocke l'article complet dans localStorage pour éviter un double appel API
    localStorage.setItem('currentArticle', JSON.stringify(news));
  
    // Redirige vers la page de l'article avec l'URL propre
    navigate(`/article/${news.id}/${slug}`);
    
    // Scroll vers le haut de la page pour l'article
    window.scrollTo(0, 0);
  };

  // Fonction corrigée pour formater la date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    
    try {
      // Suppression de la partie milliseconde et fuseau horaire qui peut causer des problèmes
      // Exemple: "2025-03-22 15:58:35.529384+00" devient "2025-03-22 15:58:35"
      const cleanDateString = dateString.split('.')[0];
      
      // Utilisation d'une expression régulière pour extraire les composants de date
      const regex = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
      const match = cleanDateString.match(regex);
      
      if (match) {
        const [_, year, month, day, hours, minutes] = match;
        return `${year}-${month}-${day} ${hours}:${minutes}`;
      }
      
      // Tentative avec l'objet Date standard si le regex échoue
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}`;
      }
      
      return "Date invalide";
    } catch (error) {
      console.error("Erreur lors du formatage de la date:", error, dateString);
      return "Date invalide";
    }
  };

  return (
    <section className="news-section" id ="news">
      <h2 className="news-title">Latest News</h2>
      
      <div className="news-carousel-container">
        <button 
          className="carousel-nav carousel-prev" 
          onClick={() => scrollCarousel('left')}
          aria-label="Previous news"
        >
          &#10094;
        </button>
        
        <div className="news-carousel" ref={carouselRef}>
          {newsData.length > 0 ? (
            newsData.map((news) => (
              <div key={news.id} className="news-card">
                <h3 className="news-card-title">{news.title}</h3>
                <p className="news-card-date">{formatDate(news.date)}</p>
                <div className="news-card-image-container">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="news-card-image" 
                    onError={(e) => { e.target.src = "/images/placeholder.jpg"; }}
                    loading="lazy"
                  />
                  <div className="news-card-overlay">
                    <button 
                      className="read-more-button"
                      onClick={() => handleReadArticle(news)}
                      aria-label={`Lire l'article: ${news.title}`}
                    >
                      Lire l'article
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="news-loading">Chargement des actualités...</div>
          )}
        </div>

        <button 
          className="carousel-nav carousel-next" 
          onClick={() => scrollCarousel('right')}
          aria-label="Next news"
        >
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
              placeholder="Entrez votre email" 
              className="newsletter-email-input"
              required
              aria-label="Email address"
            />
            <button type="submit" className="subscribe-button">
              S'inscrire à la newsletter
            </button>
            {errorMessage && (
              <div className="error-message" role="alert">
                {errorMessage}
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

export default News;