import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
// import ProgressCircle from "../components/ProgressCircle/ProgressCircle.jsx";

function Projects() {
  const hexagonsRef = useRef([]);
  const [activeProject, setActiveProject] = useState(null);

  // Icons as SVG components
  const FileCodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="9" y1="15" x2="15" y2="15"/>
      <line x1="9" y1="12" x2="15" y2="12"/>
    </svg>
  );

  const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.5-1 5.5 0 6 3 0 5.5-2 6-3"/>
      <path d="M8.5 17c0-1.5-1-3.5-3-4.5C2.5 11 1 11 1 8c0-1.5 1.5-3 3-3 1 0 2.5 1 3.5 1"/>
      <path d="M19.5 16.5c1.5 1.5 1 5.5 0 6-3 0-5.5-2-6-3"/>
      <path d="M15.5 17c0-1.5 1-3.5 3-4.5C21.5 11 23 11 23 8c0-1.5-1.5-3-3-3-1 0-2.5 1-3.5 1"/>
      <path d="M7 10a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 1 1-5 0v-1A2.5 2.5 0 0 1 7 10z"/>
      <path d="M14.5 10a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 1 1-5 0v-1a2.5 2.5 0 0 1 2.5-2.5z"/>
    </svg>
  );

  const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );

  const PaletteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.172-.835-.437-1.125-.28-.279-.438-.646-.438-1.067 0-.928.792-1.625 1.813-1.625H16c3.315 0 6-2.925 6-6.5C22 6.775 17.525 2 12 2z"/>
    </svg>
  );

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "DigiScia-Community",
      description: "Faites parties de notre communautés de DigiScientists. Restez informés des dernieres avancés technologiques et participez à nos événements et ateliers.",
      icon: <FileCodeIcon />,
      technologies: ["Tech", "News", "Acculturation"],
      color: "#6E41C0"
    },
    {
      id: 2,
      title: "DigiScia-Academy",
      description: "Former la nouvelle la nouvelle génération de Geeks.",
      icon: <GlobeIcon />,
      technologies: ["Formation", "BootCamp", "Croisanse Professionnelle"],
      color: "#41C0A0"
    },
    {
      id: 3,
      title: "DigiScia-Consulting",
      description: "Accompagner les entreprises et particuliers dans la transformation digitale et l'innovation technologique.",
      icon: <PaletteIcon />,
      technologies: ["Créer", "Accompagner", "Developper"],
      color: "#C04141"
    },
    {
      id: 4,
      title: "DigiScia-Labs",
      description: "Recherche et développement en intelligence artificielle pour créer des solutions innovantes et durables.",
      icon: <RocketIcon />,
      technologies: ["Penser", "Stratégie", "Innover"],
      color: "#4157C0"
    }
  ];

  useEffect(() => {
    // Staggered animation for hexagons
    hexagonsRef.current.forEach((hex, index) => {
      if (hex) {
        setTimeout(() => {
          hex.classList.add('activated');
        }, 300 * index);
      }
    });

    // Add active class to the circuit lines after hexagons are activated
    setTimeout(() => {
      const circuitLines = document.querySelector('.circuit-lines');
      if (circuitLines) {
        circuitLines.classList.add('active');
      }
    }, 1200);
  }, []);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  return (
    <div id="projects" className="projects-section">
      <div className="projects-content">
        <h1 className="projects-title">Nos Projets Innovants</h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => hexagonsRef.current[index] = el}
              className={`hexagon ${activeProject?.id === project.id ? 'active' : ''}`}
              style={{ 
                backgroundColor: project.color,
                borderColor: project.color
              }}
              onClick={() => handleProjectClick(project)}
            >
              {project.icon}
            </div>
          ))}
        </div>
        {/* <ProgressCircle /> */}
        <div className="project-details">
          <div className="circuit-lines"></div>
          
          {activeProject ? (
            <div className="project-info">
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              <div className="project-technologies">
                <h3>Technologies</h3>
                <div className="tech-list">
                  {activeProject.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="project-placeholder">
              <p>Cliquez sur un projet pour voir plus de détails</p>
            </div>
          )}
        </div>
      </div>

      <div className="background-illustration">
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6E41C0" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#4157C0" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path 
            d="M100,300 Q400,100 700,300 T1300,300" 
            fill="none" 
            stroke="url(#techGradient)" 
            strokeWidth="4"
          />
          <circle cx="200" cy="250" r="20" fill="#6E41C0" opacity="0.5"/>
          <circle cx="600" cy="350" r="30" fill="#41C0A0" opacity="0.5"/>
          <circle cx="400" cy="200" r="25" fill="#C04141" opacity="0.5"/>
        </svg>
      </div>
    </div>
  );
}

export default Projects;