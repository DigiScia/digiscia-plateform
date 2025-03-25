import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./Projects.css";
import fetchProjects from "../services/projectService.js";

// Composants d'icônes optimisés
const Icons = {
  FileCode: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="9" y1="15" x2="15" y2="15"/>
      <line x1="9" y1="12" x2="15" y2="12"/>
    </svg>
  ),
  Rocket: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.5-1 5.5 0 6 3 0 5.5-2 6-3"/>
      <path d="M8.5 17c0-1.5-1-3.5-3-4.5C2.5 11 1 11 1 8c0-1.5 1.5-3 3-3 1 0 2.5 1 3.5 1"/>
      <path d="M19.5 16.5c1.5 1.5 1 5.5 0 6-3 0-5.5-2-6-3"/>
      <path d="M15.5 17c0-1.5 1-3.5 3-4.5C21.5 11 23 11 23 8c0-1.5-1.5-3-3-3-1 0-2.5 1-3.5 1"/>
      <path d="M7 10a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 1 1-5 0v-1A2.5 2.5 0 0 1 7 10z"/>
      <path d="M14.5 10a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 1 1-5 0v-1a2.5 2.5 0 0 1 2.5-2.5z"/>
    </svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonctions utilitaires mémorisées
  const getIconByStatus = useCallback((status) => {
    switch(status) {
      case 'En cours':
        return <Icons.Rocket />;
      case 'Terminé':
        return <Icons.FileCode />;
      default:
        return <Icons.Globe />;
    }
  }, []);

  const getColorByTitle = useCallback((title) => {
    switch(title) {
      case 'Project1':
        return "#6E41C0"; // Purple
      case 'Project2':
        return "#41C0A0"; // Teal
      case 'Project3':
        return "#4157C0"; // Blue
      default:
        return "#6E41C0"; // Default purple
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

  // Récupération des projets
  useEffect(() => {
    let isMounted = true;
    
    const getProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        
        if (isMounted) {
          console.log("Projets récupérés:", data);
          setProjects(data);
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

  // Rendu optimisé des cartes projets
  const projectCards = useMemo(() => {
    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Chargement des projets...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Réessayer</button>
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
          animationDelay: `${index * 100}ms`,
          borderTop: `4px solid ${getColorByTitle(project.title)}`
        }}
      >
        <div className="project-card-icon" style={{ color: getColorByTitle(project.title) }}>
          {getIconByStatus(project.status)}
        </div>
        
        <div className="project-card-content">
          <h2>{project.title}</h2>
          <p className="project-description">{project.description}</p>
          
          {project.image && (
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
          )}
        </div>
      </div>
    ));
  }, [projects, loading, error]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h1 className="projects-title">Nos Projets Innovants</h1>
        
        <div className="projects-grid">
          {projectCards}
        </div>
      </div>

      <div className="background-illustration" aria-hidden="true">
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6E41C0" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#4157C0" stopOpacity="0.08"/>
            </linearGradient>
          </defs>
          <path 
            d="M100,300 Q400,100 700,300 T1300,300" 
            fill="none" 
            stroke="url(#techGradient)" 
            strokeWidth="4"
          />
          <circle cx="200" cy="250" r="20" fill="#6E41C0" opacity="0.3"/>
          <circle cx="600" cy="350" r="30" fill="#41C0A0" opacity="0.3"/>
          <circle cx="400" cy="200" r="25" fill="#C04141" opacity="0.3"/>
        </svg>
      </div>
    </section>
  );
}

export default Projects;