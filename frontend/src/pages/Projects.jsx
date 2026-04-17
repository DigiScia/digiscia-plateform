import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { 
  FaRocket, 
  FaCheckCircle, 
  FaCode, 
  FaExternalLinkAlt, 
  FaArrowRight 
} from 'react-icons/fa';

import academy from "../assets/projects/academy.png";
import media from "../assets/projects/media.png";
import store from "../assets/projects/store.svg";

import "./Projects.css";



function Projects() {
  const { t } = useTranslation();
  
  // Données fictives (avec liens ajoutés) - Traduit via useMemo pour la réactivité
  const mockProjects = useMemo(() => [
    {
      id: 1,
      title: t('projects.items.academy.title'),
      description: t('projects.items.academy.desc'),
      category: t('projects.items.academy.cat'),
      image: academy,
      link: "https://academy.digiscia.com" 
    },
    {
      id: 2,
      title: t('projects.items.media.title'),
      description: t('projects.items.media.desc'),
      category: t('projects.items.media.cat'),
      image: media,
      link: "https://media.digiscia.com" 
    },
    {
      id: 3,
      title: t('projects.items.store.title'),
      description: t('projects.items.store.desc'),
      category: t('projects.items.store.cat'),
      image: store,
      link: "https://store.digiscia.com" 
    }
  ], [t]);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d'appel API
    const timer = setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="projects" className="projects-section">
        
        {/* Glow d'ambiance */}
        <div className="ambient-glow"></div>

        <div className="projects-content">
          
          {/* HEADER */}
          <header className="projects-header">
            <span className="badge-pill">{t('projects.badge')}</span>
            <h1 className="projects-title" dangerouslySetInnerHTML={{ __html: t('projects.title') }}></h1>
            <p className="projects-subtitle">
              {t('projects.subtitle')}
            </p>
          </header>

          {/* GRID */}
          <div className="projects-grid">
            
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p className="loading-text">{t('projects.loading')}</p>
              </div>
            ) : (
              projects.map((project, index) => (
                <article 
                  key={project.id} 
                  className="project-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Image Header */}
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                      loading="lazy"
                    />
                    <div className="project-status-pill">
                      <span className="status-dot"></span>
                      {project.status}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-desc">{project.description}</p>
                    
                    {/* Lien Cliquable */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      {t('projects.viewProject')} <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </article>
              ))
            )}
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;