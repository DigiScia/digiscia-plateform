import React, { useEffect, useState, useCallback, useMemo } from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #00093D;
  color: #FFFFFF;
  overflow-x: hidden;
}

.projects-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
}

/* Fond animé subtil */
.projects-section::before {
  content: '';
  position: fixed;
  top: -50%;
  left: -20%;
  width: 100%;
  height: 150%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.08) 0%, transparent 70%);
  animation: floatBackground 25s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

@keyframes floatBackground {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-20px, -20px) scale(1.05); }
  66% { transform: translate(20px, 20px) scale(0.95); }
}

/* Grille de fond */
.grid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.02;
  background-image: 
    linear-gradient(rgba(91, 124, 255, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(91, 124, 255, 0.3) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

.projects-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

/* Titre principal */
.projects-header {
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.projects-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.projects-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #B8C5E0;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grille de projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  width: 100%;
}

/* Carte projet */
.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: cardFadeIn 0.6s ease-out forwards;
  display: flex;
  flex-direction: column;
  height: 100%;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 20px 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
}

/* En-tête de carte avec bande colorée */
.project-card-header {
  position: relative;
  height: 6px;
  background: linear-gradient(90deg, var(--card-color) 0%, rgba(91, 124, 255, 0.5) 100%);
  border-radius: 20px 20px 0 0;
}

/* Icône de statut */
.project-status-icon {
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  width: clamp(36px, 6vw, 48px);
  height: clamp(36px, 6vw, 48px);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
}

.project-card:hover .project-status-icon {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 0 20px rgba(91, 124, 255, 0.4);
}

.project-status-icon svg {
  width: clamp(18px, 3vw, 24px);
  height: clamp(18px, 3vw, 24px);
  color: #5B7CFF;
}

/* Contenu de la carte */
.project-card-content {
  padding: clamp(1.5rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-card-title {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
  padding-right: clamp(2.5rem, 4vw, 3.5rem);
}

.project-description {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: #B8C5E0;
  line-height: 1.7;
  margin-bottom: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 300;
  flex-grow: 1;
}

/* Image du projet */
.project-image {
  width: 100%;
  height: clamp(180px, 30vw, 240px);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  background: rgba(91, 124, 255, 0.05);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image img {
  transform: scale(1.08);
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 9, 61, 0.3) 100%);
  pointer-events: none;
}

/* Métadonnées */
.project-meta {
  display: flex;
  gap: clamp(1rem, 2vw, 1.5rem);
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: clamp(1rem, 2vw, 1.5rem);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.meta-item {
  flex: 1;
  min-width: clamp(120px, 30%, 150px);
}

.meta-label {
  font-size: clamp(0.75rem, 1.8vw, 0.85rem);
  color: #7A8AB5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: clamp(0.25rem, 0.5vw, 0.5rem);
  font-weight: 500;
}

.meta-value {
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #FFFFFF;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
}

/* Badge de statut */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: clamp(0.35rem, 1vw, 0.45rem) clamp(0.75rem, 2vw, 1rem);
  border-radius: 20px;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  font-weight: 500;
  white-space: nowrap;
}

.status-badge.in-progress {
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.2) 0%, rgba(255, 152, 0, 0.1) 100%);
  color: #FFB74D;
  border: 1px solid rgba(255, 152, 0, 0.3);
}

.status-badge.completed {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.1) 100%);
  color: #81C784;
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.8); }
}

/* États de chargement */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(3rem, 6vw, 5rem);
  text-align: center;
  grid-column: 1 / -1;
}

.loading-spinner {
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border: 3px solid rgba(91, 124, 255, 0.2);
  border-radius: 50%;
  border-top-color: #5B7CFF;
  animation: spin 0.8s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #B8C5E0;
  font-weight: 300;
}

/* Message d'erreur */
.error-message, .no-projects-message {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 4vw, 3rem);
  text-align: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 87, 87, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.no-projects-message {
  border-color: rgba(91, 124, 255, 0.2);
}

.error-message p, .no-projects-message p {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #B8C5E0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.retry-button {
  padding: clamp(0.75rem, 2vw, 0.9rem) clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
}

.retry-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(91, 124, 255, 0.4);
}

.retry-button:active {
  transform: scale(0.95);
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .meta-item {
    flex: none;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 1.5rem);
  }
  
  .project-image {
    height: 200px;
  }
}

/* Tablettes */
@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Grands écrans */
@media (min-width: 1025px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mode paysage mobile */
@media (max-height: 600px) and (orientation: landscape) {
  .projects-section {
    min-height: auto;
    padding: clamp(1.5rem, 4vw, 2rem) clamp(1rem, 4vw, 2rem);
  }
  
  .projects-header {
    margin-bottom: 2rem;
  }
  
  .project-image {
    height: 150px;
  }
}

/* Préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .project-card {
    opacity: 1;
  }
  
  .project-card:hover {
    transform: none;
  }
  
  .project-image img {
    transform: none;
  }
}

/* Contraste élevé */
@media (prefers-contrast: high) {
  .project-card {
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .project-card-header {
    height: 8px;
  }
}

/* Support des encoches */
@supports (padding: max(0px)) {
  .projects-section {
    padding-left: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-left));
    padding-right: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-right));
  }
}
`;

// Composants d'icônes
const Icons = {
  Rocket: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  )
};

// Données de projets simulées pour la démo
const mockProjects = [
  {
    id: 1,
    title: "DigiScia Academy",
    description: "Solution d'analyse prédictive basée sur l'IA pour optimiser les processus métiers et prendre des décisions data-driven en temps réel.",
    status: "Terminé",
    date: "2024-01-15",
    category: "Education",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    color: "#5B7CFF"
  },
  {
    id: 2,
    title: "SimpleOQuotidien",
    description: "Architecture de data lake moderne pour centraliser et gouverner l'ensemble des données de l'entreprise avec une sécurité renforcée.",
    status: "En cours",
    date: "2023-12-10",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    color: "#8BA3FF"
  },
  {
    id: 3,
    title: "DigiScia Store",
    description: "Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",
    status: "En cours",
    date: "2024-02-20",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    color: "#B8AEFF"
  },
  {
    id: 4,
    title: "Domus IA",
    description: "Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",
    status: "En cours",
    date: "2024-02-20",
    category: "Agentic AI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    color: "#B8AEFF"
  },
  {
    id: 5,
    title: "Rapidos",
    description: "Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",
    status: "En cours",
    date: "2024-02-20",
    category: "Agentic AI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    color: "#B8AEFF"
  },
  {
    id: 6,
    title: "GulmuLLM",
    description: "Tableaux de bord interactifs en temps réel pour le suivi des KPIs métiers avec visualisations avancées et alertes intelligentes.",
    status: "En cours",
    date: "2024-02-20",
    category: "LLM",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    color: "#B8AEFF"
  }
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getIconByStatus = useCallback((status) => {
    switch(status) {
      case 'En cours':
        return <Icons.Rocket />;
      case 'Terminé':
        return <Icons.CheckCircle />;
      default:
        return <Icons.Code />;
    }
  }, []);

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }, []);

  useEffect(() => {
    let isMounted = true;
    
    const getProjects = async () => {
      try {
        setLoading(true);
        // Simuler un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (isMounted) {
          setProjects(mockProjects);
          setLoading(false);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des projets:", err);
        if (isMounted) {
          setError("Impossible de charger les projets. Veuillez réessayer plus tard.");
          setLoading(false);
        }
      }
    };
    
    getProjects();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const projectCards = useMemo(() => {
    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Chargement des projets...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="error-message">
          <p>{error}</p>
          <button className="retry-button" onClick={() => window.location.reload()}>
            Réessayer
          </button>
        </div>
      );
    }

    if (projects.length === 0) {
      return (
        <div className="no-projects-message">
          <p>Aucun projet disponible pour le moment.</p>
        </div>
      );
    }

    return projects.map((project, index) => (
      <div 
        key={project.id}
        className="project-card"
        style={{
          '--card-color': project.color,
          animationDelay: `${index * 0.1}s`
        }}
      >
        <div className="project-card-header"></div>
        
        <div className="project-status-icon">
          {getIconByStatus(project.status)}
        </div>
        
        <div className="project-card-content">
          <h2 className="project-card-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          
          {project.image && (
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
          )}
          
          <div className="project-meta">
            <div className="meta-item">
              <div className="meta-label">Statut</div>
              <div className="meta-value">
                <span className={`status-badge ${project.status === 'En cours' ? 'in-progress' : 'completed'}`}>
                  <span className="status-dot"></span>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div className="meta-item">
              <div className="meta-label">Catégorie</div>
              <div className="meta-value">{project.category}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  }, [projects, loading, error, getIconByStatus]);

  return (
    <>
      <style>{styles}</style>
      <section id="projects" className="projects-section">
        <div className="grid-background" aria-hidden="true"></div>
        
        <div className="projects-content">
          <div className="projects-header">
            <h1 className="projects-title">Nos Projets Innovants</h1>
            <p className="projects-subtitle">
              Découvrez nos réalisations en Data Science et Intelligence Artificielle
            </p>
          </div>
          
          <div className="projects-grid">
            {projectCards}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;