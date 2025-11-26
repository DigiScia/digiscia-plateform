import React, { useEffect, useState, useMemo } from "react";
import { 
  FaRocket, 
  FaCheckCircle, 
  FaCode, 
  FaExternalLinkAlt, 
  FaArrowRight 
} from 'react-icons/fa';

// === STYLES CSS (Monochrome Premium) ===
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --bg-deep: #00093D;
  --text-white: #FFFFFF;
  --glass-border: rgba(255, 255, 255, 0.15);
  --glass-bg: rgba(255, 255, 255, 0.02);
  --glass-hover: rgba(255, 255, 255, 0.05);
  --text-muted: rgba(255, 255, 255, 0.7);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-deep);
  color: var(--text-white);
  overflow-x: hidden;
}

.projects-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: var(--bg-deep);
  padding: clamp(4rem, 6vw, 8rem) clamp(1rem, 4vw, 2rem);
  
  /* Texture Grille Subtile */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Lumière d'ambiance */
.ambient-glow {
  position: fixed;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 60vh;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

.projects-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px; /* Aligné avec About */
  margin: 0 auto;
}

/* === HEADER === */
.projects-header {
  text-align: center;
  margin-bottom: clamp(4rem, 6vw, 6rem);
  animation: fadeDown 0.8s ease-out;
}

.badge-pill {
  display: inline-block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: var(--text-white);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.projects-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--text-white);
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.projects-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* === GRILLE === */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  width: 100%;
}

/* === CARTE PROJET === */
.project-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  backdrop-filter: blur(20px);
  opacity: 0; /* Pour l'anim d'entrée */
  animation: fadeUp 0.6s ease-out forwards;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.4);
  background: var(--glass-hover);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Image container */
.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-bottom: 1px solid var(--glass-border);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: grayscale(20%); /* Touche premium légèrement désaturée */
}

.project-card:hover .project-image {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.project-status-pill {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.4rem 0.8rem;
  background: rgba(0, 9, 61, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

/* Contenu */
.project-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-category {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.8rem;
}

.project-title {
  font-size: 1.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-white);
}

.project-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 2rem;
  flex-grow: 1;
}

/* Bouton Lien */
.project-link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: var(--text-white);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
}

.project-link-btn:hover {
  background: #FFFFFF;
  color: var(--bg-deep); /* Texte devient bleu sur fond blanc */
  border-color: #FFFFFF;
}

/* LOADING & ERROR */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  width: 100%;
  grid-column: 1 / -1;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: spin 1s infinite linear;
  margin-bottom: 1.5rem;
}

/* ANIMATIONS */
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes spin { to { transform: rotate(360deg); } }

/* RESPONSIVE */
@media (max-width: 768px) {
  .projects-grid { grid-template-columns: 1fr; }
  .projects-title { font-size: 2.5rem; }
}
`;

// Données fictives (avec liens ajoutés)
const mockProjects = [
  {
    id: 1,
    title: "DigiScia Academy",
    description: "Plateforme EdTech innovante pour former la prochaine génération d'experts en Data & IA.",
    category: "Éducation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    link: "https://academy.digiscia.com" 
  },
  {
    id: 2,
    title: "DigiScia Media",
    description: "Suivez l'actualité du secteur de l'IA et de la Data.",
    category: "Media",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    link: "https://linkedin.com/company/digiscia" 
  },
  // {
  //   id: 2,
  //   title: "DataEcho Hub",
  //   description: "Tableaux de bord temps réel pour le pilotage stratégique des KPIs industriels.",
  //   category: "Business Intelligence",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  //   link: "#"
  // },
  // {
  //   id: 3,
  //   title: "SecureLake",
  //   description: "Architecture Data Lake souveraine pour centraliser et sécuriser les données sensibles.",
  //   category: "Infrastructure",
  //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
  //   link: "#"
  // },
  // {
  //   id: 4,
  //   title: "AgriTech IA",
  //   description: "Modèles prédictifs pour optimiser les rendements agricoles et la gestion des ressources.",
  //   category: "IA Appliquée",
  //   image: "https://images.unsplash.com/photo-1625246333195-58f214f76328?w=800&h=600&fit=crop&q=80",
  //   link: "#"
  // }
];

function Projects() {
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
      <style>{styles}</style>
      <section id="projects" className="projects-section">
        
        {/* Glow d'ambiance */}
        <div className="ambient-glow"></div>

        <div className="projects-content">
          
          {/* HEADER */}
          <header className="projects-header">
            <span className="badge-pill">Portfolio & Réalisations</span>
            <h1 className="projects-title">Nos Projets et Réalisations</h1>
            <p className="projects-subtitle">
              Une sélection de nos projets où la donnée rencontre la performance.
              Des solutions concrètes pour des défis complexes.
            </p>
          </header>

          {/* GRID */}
          <div className="projects-grid">
            
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p style={{color: 'rgba(255,255,255,0.7)'}}>Chargement des projets...</p>
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
                      Voir le projet <FaExternalLinkAlt size={14} />
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