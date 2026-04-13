import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fetchNews from '../services/newsService';
import LoadingWrapper from '../components/SplashScreen/LoadingWrapper.jsx';
import './Article.css';

function Article() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const navigate = useNavigate();

  // Fonction pour récupérer les articles connexes
  const fetchRelatedArticles = useCallback(async (currentArticle, allNews) => {
    if (!currentArticle || !Array.isArray(allNews)) return [];
    
    // Filtre pour trouver des articles similaires (même auteur ou mêmes tags)
    return allNews
      .filter(news => 
        news.id !== currentArticle.id && 
        (
          (currentArticle.tags && news.tags && 
           news.tags.some(tag => currentArticle.tags.includes(tag))) ||
          (currentArticle.author && news.author === currentArticle.author)
        )
      )
      .slice(0, 3); // Limiter à 3 articles connexes
  }, []);

  // Fonction memoïsée pour récupérer l'article
  const getArticleById = useCallback(async () => {
    try {
      setLoading(true);
      
      // Vérifier d'abord dans localStorage
      const storedArticle = localStorage.getItem('currentArticle');
      if (storedArticle) {
        try {
          const parsedArticle = JSON.parse(storedArticle);
          if (parsedArticle.id.toString() === id) {
            setArticle(parsedArticle);
            
            // Récupérer tous les articles pour trouver des articles connexes
            const allNews = await fetchNews();
            if (Array.isArray(allNews)) {
              const related = await fetchRelatedArticles(parsedArticle, allNews);
              setRelatedArticles(related);
            }
            
            setLoading(false);
            return;
          }
        } catch (err) {
          console.error("Erreur lors de la lecture de l'article stocké:", err);
        }
      }
      
      // Si l'article n'est pas dans localStorage ou ne correspond pas
      const allNews = await fetchNews();
      
      if (Array.isArray(allNews)) {
        const foundArticle = allNews.find(item => item.id.toString() === id);
        
        if (foundArticle) {
          setArticle(foundArticle);
          localStorage.setItem('currentArticle', JSON.stringify(foundArticle));
          
          // Trouver des articles connexes
          const related = await fetchRelatedArticles(foundArticle, allNews);
          setRelatedArticles(related);
        } else {
          setError("Article non trouvé");
        }
      } else {
        setError("Format de données invalide");
      }
    } catch (err) {
      console.error("Erreur lors de la récupération de l'article:", err);
      setError("Impossible de charger l'article");
    } finally {
      setLoading(false);
    }
  }, [id, fetchRelatedArticles]);

  useEffect(() => {
    getArticleById();
    // Scroll vers le haut de la page lors du chargement de l'article
    window.scrollTo(0, 0);
  }, [getArticleById]);

  const handleReturnToNews = () => {
    navigate('/?scrollTo=news');
  };

  const handleReadRelatedArticle = (relatedArticle) => {
    // Stocke l'article dans localStorage
    localStorage.setItem('currentArticle', JSON.stringify(relatedArticle));
    
    // Crée un slug pour l'URL
    const slug = relatedArticle.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
    
    // Navigue vers l'article connexe
    navigate(`/article/${relatedArticle.id}/${slug}`);
    
    // Scroll vers le haut
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
      console.error("Erreur lors du formatage de la date article:", error, dateString);
      return "Date invalide";
    }
  };

  // L'affichage est géré par LoadingWrapper ci-dessous

  // Rendu conditionnel pour les erreurs
  if (error) {
    return (
      <div className="article-page full-width">
        <div className="article-container full-width-container">
          <div className="article-error">
            <span className="error-icon">⚠️</span>
            <h2>{t('article.error')}</h2>
            <p>{error}</p>
            <button className="return-button" onClick={handleReturnToNews}>
              {t('article.backToNews')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Rendu conditionnel si l'article n'est pas trouvé
  if (!article) {
    return (
      <div className="article-page full-width">
        <div className="article-container full-width-container">
          <div className="article-error">
            <span className="error-icon">🔍</span>
            <h2>{t('article.notFound')}</h2>
            <p>{t('article.notFoundText')}</p>
            <button className="return-button" onClick={handleReturnToNews}>
              {t('article.backToNews')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <LoadingWrapper isLoading={loading}>
      <div className="article-page full-width">
        <div className="article-container full-width-container">
          <article className="article-content">
            {/* Bouton de retour en haut pour mobile */}
            <div className="mobile-return">
              <button className="back-button" onClick={handleReturnToNews} aria-label={t('article.backToNews')}>
                &#10094; {t('article.back')}
              </button>
            </div>

            <header className="article-header">
              <h1 className="article-title">{article?.title}</h1>
              <p className="article-date">{formatDate(article?.date)}</p>
              {article?.author && (
                <p className="article-author-header">{t('article.by')} {article?.author}</p>
              )}
            </header>
            
            <div className="article-featured-image-container">
              <img 
                src={article?.image} 
                alt={article?.title || "Image de l'article"} 
                className="article-featured-image"
                onError={(e) => { e.target.src = "/images/placeholder.jpg"; }}
                loading="lazy"
              />
            </div>
            
            <div className="article-body">
              {article?.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : article?.excerpt ? (
                <div className="article-excerpt">{article.excerpt}</div>
              ) : (
                <div className="article-no-content">
                  <p>{t('article.noContent')}</p>
                </div>
              )}
            </div>
            
            <footer className="article-footer">
              <div className="article-meta">
                {article?.author && (
                  <div className="article-author">
                    <strong>Auteur:</strong> {article.author}
                  </div>
                )}
                
                {article?.tags && article.tags.length > 0 && (
                  <div className="article-tags">
                    <strong>Tags:</strong>
                    <div className="tags-container">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="tag-item">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button className="return-button" onClick={handleReturnToNews}>
                {t('article.backToNews')}
              </button>
            </footer>
          </article>
          
          {/* Section pour les articles connexes */}
          {relatedArticles.length > 0 && (
            <div className="related-articles-section">
              <h3 className="related-title">{t('article.related')}</h3>
              <div className="related-articles-container">
                {relatedArticles.map(relatedArticle => (
                  <div 
                    key={relatedArticle.id} 
                    className="related-article-card"
                    onClick={() => handleReadRelatedArticle(relatedArticle)}
                  >
                    <div className="related-article-image-container">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title} 
                        className="related-article-image"
                        onError={(e) => { e.target.src = "/images/placeholder.jpg"; }}
                        loading="lazy"
                      />
                    </div>
                    <div className="related-article-content">
                      <h4 className="related-article-title">{relatedArticle.title}</h4>
                      <p className="related-article-date">
                        {formatDate(relatedArticle.date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </LoadingWrapper>
  );
}

export default Article;