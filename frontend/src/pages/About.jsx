import React, { useState, useEffect } from "react";
import "./About.css";
import { 
  FaBrain, 
  FaLaptopCode, 
  FaDatabase, 
  FaChartLine, 
  FaGraduationCap, 
  FaCogs, 
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaArrowRight
} from 'react-icons/fa';

// Composant pour les statistiques animées
const StatCard = ({ number, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCount = () => {
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div ref={cardRef} className="stat-card">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

// Composant pour les tech icons avec animation au survol
const TechIcon = ({ icon: Icon, label, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="tech-icon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`icon-circle ${isHovered ? 'hovered' : ''}`}>
        <Icon />
        <div className="icon-ripple"></div>
      </div>
      <h4>{label}</h4>
      <p className={isHovered ? 'visible' : ''}>{description}</p>
    </div>
  );
};

// Composant pour les cartes de mission avec animation au défilement
const MissionCard = ({ title, description, icon: Icon, features }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`mission-card ${isVisible ? 'visible' : ''}`}
    >
      <div className="mission-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {features && (
        <ul className="mission-features">
          {features.map((feature, index) => (
            <li key={index}>
              <FaArrowRight className="feature-icon" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <div className="card-glow"></div>
    </div>
  );
};

// Composant pour les valeurs
const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="value-card">
      <div className="value-icon">
        <Icon />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

function About() {
  // Données des technologies avec descriptions
  const techData = [
    { 
      icon: FaBrain, 
      label: "Intelligence Artificielle",
      description: "Solutions d'IA adaptées à vos besoins métiers"
    },
    { 
      icon: FaDatabase, 
      label: "Ingénierie des Données",
      description: "Architecture et pipelines de données robustes"
    },
    { 
      icon: FaChartLine, 
      label: "Data Science",
      description: "Analyse avancée et modélisation prédictive"
    },
    { 
      icon: FaLaptopCode, 
      label: "Développement",
      description: "Applications web et mobile innovantes"
    }
  ];

  // Données des missions avec fonctionnalités
  const missionData = [
    { 
      title: "Formation & Développement des Compétences",
      description: "Nous formons vos équipes aux technologies de pointe et aux meilleures pratiques en data science et IA.",
      icon: FaGraduationCap,
      features: [
        "Formations certifiantes en Data Science & IA",
        "Workshops pratiques sur vos données",
        "Accompagnement personnalisé",
        "Veille technologique continue"
      ]
    },
    { 
      title: "Solutions Technologiques Sur Mesure",
      description: "Nous concevons et développons des solutions innovantes exploitant vos données pour créer de la valeur.",
      icon: FaCogs,
      features: [
        "Développement d'applications data-driven",
        "Tableaux de bord interactifs",
        "APIs et services web",
        "Solutions cloud natives"
      ]
    },
    { 
      title: "Transformation Digitale & Stratégie Data",
      description: "Nous accompagnons votre organisation dans sa transformation pour devenir véritablement data-driven.",
      icon: FaRocket,
      features: [
        "Audit et stratégie data",
        "Gouvernance des données",
        "Architecture data moderne",
        "Change management"
      ]
    }
  ];

  // Valeurs de l'entreprise
  const values = [
    {
      icon: FaShieldAlt,
      title: "Sécurité & Conformité",
      description: "Respect des normes RGPD et sécurisation de vos données"
    },
    {
      icon: FaUsers,
      title: "Approche Collaborative",
      description: "Co-construction avec vos équipes pour un transfert de compétences"
    },
    {
      icon: FaLightbulb,
      title: "Innovation Continue",
      description: "Veille technologique et adoption des dernières innovations"
    }
  ];

  return (
    <section id="about" className="about-container">
      {/* Particules animées en arrière-plan */}
      <div className="animated-particles">
        {[...Array(15)].map((_, index) => (
          <div 
            key={index} 
            className="particle" 
            style={{ 
              '--delay': `${Math.random() * 10}s`,
              '--duration': `${Math.random() * 20 + 15}s`,
              '--size': `${Math.random() * 6 + 2}px`
            }}
          ></div>
        ))}
      </div>
      
      {/* Entête */}
      <div className="about-header">
        <div className="header-content">
          <h1 className="about-title">
            Transformez vos <span className="gradient-text">données</span> en 
            <span className="gradient-text"> avantage concurrentiel</span>
          </h1>
          <p className="about-subtitle">
            DigiScia accompagne les entreprises dans leur transition numérique pour exploiter 
            leurs données, devenir data-driven et placer l'intelligence des données au cœur de leur stratégie.
          </p>
        </div>
      </div>

      {/* Statistiques
      <div className="stats-section">
        <StatCard number={50} label="Projets réalisés" suffix="+" />
        <StatCard number={98} label="Satisfaction client" suffix="%" />
        <StatCard number={15} label="Experts certifiés" suffix="+" />
        <StatCard number={5} label="Années d'expérience" suffix="+" />
      </div> */}
      
      {/* Section principale */}
      <div className="about-main">
        <div className="about-content">
          {/* Introduction */}
          <div className="intro-section glass-card">
            <h2>Qui sommes-nous ?</h2>
            <p className="intro-text">
              <strong>DigiScia</strong> est une Entreprise de Services Numériques (ESN) spécialisée 
              en science des données et intelligence artificielle. Nous aidons les organisations 
              à <span className="highlight">transformer leurs données en insights actionnables </span> 
              et à construire une culture data-driven durable.
            </p>
            <p className="intro-text">
              Notre expertise couvre l'ensemble de la chaîne de valeur de la donnée : 
              de la collecte et l'ingénierie des données jusqu'au déploiement de solutions 
              d'IA en production, en garantissant <span className="highlight">sécurité, 
              conformité et performance</span>.
            </p>
          </div>

          {/* Expertise technique */}
          <div className="expertise-section">
            <h2>Notre Expertise</h2>
            <div className="tech-grid">
              {techData.map((tech, index) => (
                <TechIcon 
                  key={index} 
                  icon={tech.icon} 
                  label={tech.label}
                  description={tech.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Illustration moderne */}
        <div className="about-visual">
          <div className="data-flow-illustration">
            <div className="data-node node-1">
              <FaDatabase />
            </div>
            <div className="data-node node-2">
              <FaCogs />
            </div>
            <div className="data-node node-3">
              <FaBrain />
            </div>
            <div className="data-node node-4">
              <FaChartLine />
            </div>
            <div className="connection-lines">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Valeurs */}
      <div className="values-section">
        <h2>Nos Valeurs</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
      
      {/* Section missions */}
      {/* <div className="missions-section">
        <div className="section-header">
          <h2>Nos Services</h2>
          <p className="section-description">
            Nous vous accompagnons à chaque étape de votre transformation data-driven
          </p>
        </div>
        
        <div className="missions-grid">
          {missionData.map((mission, index) => (
            <MissionCard 
              key={index}
              title={mission.title}
              description={mission.description}
              icon={mission.icon}
              features={mission.features}
            />
          ))}
        </div>
      </div> */}

      {/* Call to action */}
      {/* <div className="cta-section glass-card">
        <h2>Prêt à transformer vos données en succès ?</h2>
        <p>Contactez nos experts pour discuter de votre projet et découvrir comment DigiScia peut vous aider.</p>
        <button className="cta-button">
          Démarrer votre projet
          <FaArrowRight />
        </button>
      </div> */}
    </section>
  );
}

export default About;