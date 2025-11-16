import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Ajout de useNavigate
import axios from 'axios';
import Footer from '../components/Footer/Footer.jsx'; // Import du Footer
import './ArticleView.css'; // Import du nouveau CSS

// Icônes (vous pouvez les mettre dans un fichier séparé si vous préférez)
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

function ArticleView() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    // Fait remonter en haut de la page à chaque chargement
    window.scrollTo(0, 0); 
    
    async function fetchArticle() {
      setLoading(true);
      setError(null);
      try {
        // **IMPORTANT**: Assurez-vous que l'URL de votre API est correcte
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/news/${id}/`);
        setArticle(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération de l'article:", err);
        setError("Impossible de charger l'article. Il n'existe peut-être plus.");
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  // Formate la date de manière plus élégante
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      });
    } catch (error) {
       return "Date invalide";
    }
  };
  
  // Fonction pour retourner à la page des news
  const goBack = () => {
    navigate('/#news'); // Renvoie à la page d'accueil, section #news
  };

  // --- États de chargement et d'erreur ---
  if (loading) {
    return (
      <div className="article-status-container">
        <div className="article-loading">
          <div className="spinner"></div>
          Chargement de l'article...
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="article-status-container">
        <div className="article-error">
          <h2>Article non trouvé</h2>
          <p>{error || "L'article que vous cherchez n'existe pas."}</p>
          <button onClick={goBack} className="article-back-btn">
            <BackIcon />
            Retour aux actualités
          </button>
        </div>
      </div>
    );
  }

  // --- Rendu de l'article ---
  return (
    <>
      <div className="article-view-wrapper">
        <div className="article-container">
          
          {/* Bouton de retour */}
          <button onClick={goBack} className="article-back-btn">
            <BackIcon />
            Retour aux actualités
          </button>

          {/* En-tête de l'article */}
          <header className="article-header">
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <CalendarIcon />
              <span className="article-date">{formatDate(article.created_at)}</span>
            </div>
          </header>
          
          {/* Image principale (Hero) */}
          {article.image && (
            <div className="article-image-container">
              <img 
                src={article.image} 
                alt={article.title} 
                className="article-image" 
                onError={(e) => { e.target.style.display = 'none'; }} // Cache l'image si elle est cassée
              />
            </div>
          )}
          
          {/* Contenu (rendu depuis l'API) */}
          <div 
            className="article-content"
            // Attention : utilisez-le uniquement si vous faites confiance au HTML de votre API
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
      
      {/* Ajout du Footer */}
      <Footer />
    </>
  );
}

export default ArticleView;