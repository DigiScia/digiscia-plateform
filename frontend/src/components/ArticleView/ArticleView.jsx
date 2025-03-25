// 1. Créez un nouveau composant ArticleView.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArticleView.css'; // Vous devrez créer ce fichier CSS

function ArticleView() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/news/${id}/`);
        setArticle(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération de l'article:", err);
        setError("Impossible de charger l'article.");
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) return <div className="article-loading">Chargement de l'article...</div>;
  if (error) return <div className="article-error">{error}</div>;
  if (!article) return <div className="article-not-found">Article non trouvé</div>;

  return (
    <div className="article-container">
      <div className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-date">{new Date(article.date).toLocaleDateString()}</p>
      </div>
      
      {article.image && (
        <div className="article-image-container">
          <img 
            src={article.image} 
            alt={article.title} 
            className="article-image" 
            onError={(e) => { e.target.src = "/images/placeholder.jpg"; }}
          />
        </div>
      )}
      
      <div 
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}

export default ArticleView;