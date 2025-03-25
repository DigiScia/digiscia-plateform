import React, { useState, useEffect } from "react";
import "./About.css";
import { FaBrain, FaLaptopCode, FaDatabase, FaChartLine, FaGraduationCap, FaCogs, FaRocket } from 'react-icons/fa';

// Composant pour les tech icons avec animation au survol
const TechIcon = ({ icon: Icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="tech-icon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`icon-circle ${isHovered ? 'hovered' : ''}`}>
        <Icon />
      </div>
      <span className={isHovered ? 'text-highlight' : ''}>{label}</span>
    </div>
  );
};

// Composant pour les cartes de mission avec animation au défilement
const MissionCard = ({ title, description, icon: Icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`mission-card ${isVisible ? 'visible' : ''}`}
    >
      <div className="mission-icon">
        <Icon />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="card-glow"></div>
    </div>
  );
};

function About() {
  // Données des technologies
  const techData = [
    { icon: FaBrain, label: "Intelligence Artificielle" },
    { icon: FaDatabase, label: "Big Data" },
    { icon: FaChartLine, label: "Data Science" },
    { icon: FaLaptopCode, label: "Développement" }
  ];

  // Données des missions avec icônes associées
  const missionData = [
    { 
      title: "Former aux métiers du numérique",
      description: "Nous offrons des formations de pointe en IT, data science et intelligence artificielle, alignées sur les exigences du marché et les enjeux technologiques de demain.",
      icon: FaGraduationCap
    },
    { 
      title: "Concevoir des solutions technologiques sur mesure",
      description: "Nous développons des outils et applications innovants exploitant la data et l'IA pour répondre aux défis des entreprises et startups africaines.",
      icon: FaCogs
    },
    { 
      title: "Accompagner la transformation digitale des entreprises",
      description: "Nous proposons un accompagnement stratégique et du consulting en data et IA pour optimiser la prise de décision et renforcer la compétitivité des entreprises.",
      icon: FaRocket
    }
  ];

  // Points de données sur la carte d'Afrique
  const dataPoints = [
    { top: '40%', left: '45%' },
    { top: '30%', left: '55%' },
    { top: '60%', left: '52%' },
    { top: '25%', left: '35%' },
    { top: '70%', left: '45%' },
  ];

  return (
    <section id="about" className="about-container">
      <div className="animated-particles">
        {[...Array(20)].map((_, index) => (
          <div 
            key={index} 
            className="particle" 
            style={{ 
              '--delay': `${Math.random() * 5}s`,
              '--size': `${Math.random() * 10 + 5}px`,
              '--speed': `${Math.random() * 30 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="about-header">
        <h2 className="about-title">À propos de DigiScia</h2>
        <div className="title-underline">
          <div className="title-pulser"></div>
        </div>
      </div>
      
      <div className="about-main">
        <div className="about-content">
          <div className="about-intro glass-effect">
            <p className="about-description">
              <span className="highlight">DigiScia</span> est un centre d'innovation numérique spécialisé en science des données, avec une expertise particulière en ingénierie et en qualité des données, ainsi qu'en intelligence artificielle. Nous vous accompagnons dans la transformation de vos idées en projets innovants et à fort impact.
            </p>
            
            <div className="tech-icons">
              {techData.map((tech, index) => (
                <TechIcon key={index} icon={tech.icon} label={tech.label} />
              ))}
            </div>
          </div>
          
          <div className="vision-section glass-effect">
            <div className="section-header">
              <h3>Notre Vision</h3>
              <div className="africa-map-container">
                <div className="africa-map"></div>
                <div className="data-points">
                  {dataPoints.map((point, index) => (
                    <span 
                      key={index}
                      className="data-point" 
                      style={{ top: point.top, left: point.left }}
                    ></span>
                  ))}
                </div>
                <div className="map-glow"></div>
              </div>
            </div>
            <p className="about-description">
              Nous mettons la <span className="highlight">donnée au cœur</span> de la prise de décision et de l'innovation. Nous voulons créer un environnement où les talents locaux, les entreprises et les institutions peuvent exploiter la puissance de la data et de l'IA pour répondre aux défis économiques, sociaux et environnementaux.
            </p>
          </div>
        </div>
        
        <div className="about-graphic">
          <div className="circuit-illustration"></div>
          <div className="circuit-lines"></div>
          <div className="data-nodes">
            {[...Array(5)].map((_, index) => (
              <div key={index} className={`node node${index + 1}`}></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Section missions sur toute la largeur */}
      <div className="missions-section full-width">
        <div className="missions-header">
          <h3>Nos Missions</h3>
          <div className="section-subtitle">Nous concrétisons votre transformation digitale</div>
        </div>
        
        <div className="missions-grid">
          {missionData.map((mission, index) => (
            <MissionCard 
              key={index}
              title={mission.title}
              description={mission.description}
              icon={mission.icon}
            />
          ))}
        </div>
      </div>
      
      <div className="tech-background"></div>
    </section>
  );
}

export default About;