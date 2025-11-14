import React, { useState, useEffect } from "react";
import { 
  FaBrain, 
  FaLaptopCode, 
  FaDatabase, 
  FaChartLine, 
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaCogs
} from 'react-icons/fa';

// Styles inline pour éviter les dépendances externes
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

.about-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem);
  overflow-x: hidden;
}

.about-container::before {
  content: '';
  position: fixed;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 150%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.08) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.about-inner {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.animated-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(91, 124, 255, 0.4);
  border-radius: 50%;
  opacity: 0.05;
  filter: blur(1px);
  animation: float var(--duration) infinite linear;
  animation-delay: var(--delay);
}

@keyframes float {
  0% {
    transform: translateY(100vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.05;
  }
  90% {
    opacity: 0.05;
  }
  100% {
    transform: translateY(-100vh) translateX(100px) rotate(360deg);
    opacity: 0;
  }
}

.about-header {
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 8rem);
  position: relative;
  z-index: 1;
  animation: fadeInUp 1s ease-out;
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

.about-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #5B7CFF 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  font-weight: 700;
}

.about-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #B8C5E0;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 300;
  letter-spacing: -0.01em;
}

.about-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(3rem, 6vw, 6rem);
  margin-bottom: clamp(4rem, 8vw, 8rem);
  position: relative;
  z-index: 1;
}

@media (min-width: 1024px) {
  .about-main {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
  }
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 2px 40px rgba(91, 124, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 60px rgba(91, 124, 255, 0.12);
  border-color: rgba(91, 124, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
}

.about-content h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.01em;
}

.about-content h2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #5B7CFF;
  border-radius: 2px;
}

.intro-section {
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.intro-text {
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  line-height: 1.8;
  color: #B8C5E0;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  font-weight: 300;
}

.intro-text:last-child {
  margin-bottom: 0;
}

.highlight {
  color: #5B7CFF;
  font-weight: 500;
  background: linear-gradient(to right, rgba(91, 124, 255, 0.15) 0%, rgba(91, 124, 255, 0.15) 100%);
  padding: 0 4px;
  border-radius: 3px;
}

.expertise-section h2 {
  margin-bottom: clamp(2rem, 4vw, 3rem);
  text-align: center;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

.tech-icon {
  text-align: center;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  position: relative;
  overflow: hidden;
}

.tech-icon:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 0 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
}

.icon-circle {
  position: relative;
  width: clamp(64px, 12vw, 80px);
  height: clamp(64px, 12vw, 80px);
  margin: 0 auto clamp(1rem, 2vw, 1.5rem);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-circle.hovered {
  transform: scale(1.1);
  box-shadow: 0 0 40px rgba(91, 124, 255, 0.4);
  border-color: rgba(91, 124, 255, 0.6);
}

.icon-circle svg {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #5B7CFF;
}

.tech-icon h4 {
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
  font-family: 'Space Grotesk', sans-serif;
}

.tech-icon p {
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  color: #7A8AB5;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.6;
  font-weight: 300;
}

.tech-icon p.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(300px, 50vw, 500px);
  position: relative;
}

.data-flow-illustration {
  position: relative;
  width: clamp(250px, 50vw, 400px);
  height: clamp(250px, 50vw, 400px);
}

.data-node {
  position: absolute;
  width: clamp(48px, 10vw, 72px);
  height: clamp(48px, 10vw, 72px);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(91, 124, 255, 0.2);
  animation: pulse 3s infinite ease-in-out;
}

.data-node svg {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #5B7CFF;
}

.node-1 { top: 0; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
.node-2 { top: 50%; right: 0; transform: translateY(-50%); animation-delay: 0.5s; }
.node-3 { bottom: 0; left: 50%; transform: translateX(-50%); animation-delay: 1s; }
.node-4 { top: 50%; left: 0; transform: translateY(-50%); animation-delay: 1.5s; }

@keyframes pulse {
  0%, 100% { 
    transform: scale(1) translateX(-50%); 
    box-shadow: 0 4px 24px rgba(91, 124, 255, 0.2);
  }
  50% { 
    transform: scale(1.08) translateX(-50%); 
    box-shadow: 0 8px 40px rgba(91, 124, 255, 0.4);
  }
}

.node-2 {
  animation-name: pulse2;
}
@keyframes pulse2 {
  0%, 100% { 
    transform: scale(1) translateY(-50%); 
    box-shadow: 0 4px 24px rgba(91, 124, 255, 0.2);
  }
  50% { 
    transform: scale(1.08) translateY(-50%); 
    box-shadow: 0 8px 40px rgba(91, 124, 255, 0.4);
  }
}

.node-4 {
  animation-name: pulse4;
}
@keyframes pulse4 {
  0%, 100% { 
    transform: scale(1) translateY(-50%); 
    box-shadow: 0 4px 24px rgba(91, 124, 255, 0.2);
  }
  50% { 
    transform: scale(1.08) translateY(-50%); 
    box-shadow: 0 8px 40px rgba(91, 124, 255, 0.4);
  }
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.line {
  position: absolute;
  background: linear-gradient(90deg, 
    rgba(91, 124, 255, 0) 0%, 
    rgba(91, 124, 255, 0.4) 50%, 
    rgba(91, 124, 255, 0) 100%
  );
  opacity: 0.3;
  animation: flow 4s infinite ease-in-out;
  filter: blur(1px);
}

@keyframes flow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}

.line-1 {
  top: 20%;
  left: 50%;
  width: 2px;
  height: 30%;
  transform: translateX(-50%) rotate(45deg);
  transform-origin: top;
}

.line-2 {
  top: 50%;
  right: 20%;
  width: 30%;
  height: 2px;
  transform: translateY(-50%) rotate(45deg);
  animation-delay: 0.5s;
}

.line-3 {
  bottom: 20%;
  left: 50%;
  width: 2px;
  height: 30%;
  transform: translateX(-50%) rotate(-45deg);
  transform-origin: bottom;
  animation-delay: 1s;
}

.values-section {
  margin-bottom: clamp(4rem, 8vw, 8rem);
  position: relative;
  z-index: 1;
}

.values-section h2 {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.01em;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

.value-card {
  text-align: center;
  padding: clamp(2rem, 4vw, 2.5rem);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
}

.value-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 0 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
}

.value-icon {
  width: clamp(56px, 10vw, 72px);
  height: clamp(56px, 10vw, 72px);
  margin: 0 auto clamp(1rem, 2vw, 1.5rem);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-icon svg {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #5B7CFF;
}

.value-card h4 {
  font-size: clamp(1.1rem, 2.2vw, 1.25rem);
  font-weight: 600;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  font-family: 'Space Grotesk', sans-serif;
}

.value-card p {
  color: #B8C5E0;
  line-height: 1.7;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  font-weight: 300;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

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
      </div>
      <h4>{label}</h4>
      <p className={isHovered ? 'visible' : ''}>{description}</p>
    </div>
  );
};

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
    <>
      <style>{styles}</style>
      <section className="about-container" id="about">
        <div className="animated-particles">
          {[...Array(15)].map((_, index) => (
            <div 
              key={index} 
              className="particle" 
              style={{ 
                '--delay': `${Math.random() * 10}s`,
                '--duration': `${Math.random() * 20 + 15}s`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            ></div>
          ))}
        </div>
        
        <div className="about-inner">
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
          
          <div className="about-main">
            <div className="about-content">
              <div className="intro-section glass-card">
                <h2>Qui sommes-nous ?</h2>
                <p className="intro-text">
                  <strong>DigiScia</strong> est une Entreprise de Services Numériques (ESN) spécialisée 
                  en science des données et intelligence artificielle. Nous aidons les organisations 
                  à <span className="highlight">transformer leurs données en insights actionnables</span> 
                  et à construire une culture data-driven durable.
                </p>
                <p className="intro-text">
                  Notre expertise couvre l'ensemble de la chaîne de valeur de la donnée : 
                  de la collecte et l'ingénierie des données jusqu'au déploiement de solutions 
                  d'IA en production, en garantissant <span className="highlight">sécurité, 
                  conformité et performance</span>.
                </p>
              </div>

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
        </div>
      </section>
    </>
  );
}

export default About;