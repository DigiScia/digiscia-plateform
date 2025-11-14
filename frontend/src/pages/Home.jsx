import React, { useState, useEffect, useCallback, memo } from "react";
import logoImage from "../assets/logobleu.jpg";


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

.home-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Effet de fond animé */
.home-container::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 100%;
  height: 150%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.12) 0%, transparent 70%);
  animation: float 20s infinite ease-in-out;
  pointer-events: none;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, -30px) scale(1.1); }
  66% { transform: translate(30px, 30px) scale(0.9); }
}

/* Grille de points animée */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: 
    radial-gradient(circle, rgba(91, 124, 255, 0.8) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridMove 30s linear infinite;
  pointer-events: none;
}

@keyframes gridMove {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

/* Particules flottantes */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(91, 124, 255, 0.5);
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat var(--duration) infinite ease-in-out;
  animation-delay: var(--delay);
  filter: blur(1px);
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) translateX(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) translateX(var(--drift)) scale(1);
    opacity: 0;
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Logo */
.logo-container {
  margin-bottom: clamp(2rem, 4vw, 3rem);
  position: relative;
  animation: scaleIn 0.8s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.hero-logo {
  width: clamp(200px, 40vw, 400px);
  height: auto;
  filter: drop-shadow(0 10px 40px rgba(91, 124, 255, 0.3));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-logo:hover {
  filter: drop-shadow(0 15px 60px rgba(91, 124, 255, 0.5));
  transform: translateY(-5px);
}

/* Hero Text */
.hero-text {
  max-width: 900px;
  width: 100%;
}

.welcome-text {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 300;
  color: #B8C5E0;
  margin-bottom: clamp(0.5rem, 1vw, 1rem);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  animation: fadeIn 1s ease-out 0.2s both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.brand-name {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  background: linear-gradient(135deg, #FFFFFF 0%, #5B7CFF 50%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
  animation: fadeIn 1s ease-out 0.4s both;
  background-size: 200% auto;
  animation: fadeIn 1s ease-out 0.4s both, shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Tagline avec rotation de texte */
.tagline {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 500;
  color: #5B7CFF;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  min-height: clamp(2.5rem, 5vw, 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.01em;
  animation: fadeIn 1s ease-out 0.6s both;
}

.tagline-text {
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.tagline-text::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #5B7CFF, transparent);
  opacity: 0.5;
}

.tagline-text.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.tagline-text.fade-out {
  opacity: 0;
  transform: translateY(-10px);
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1rem, 2vw, 1.5rem);
  justify-content: center;
  align-items: center;
  animation: fadeIn 1s ease-out 0.8s both;
}

.cta-button {
  position: relative;
  padding: clamp(0.9rem, 2vw, 1.1rem) clamp(2rem, 4vw, 2.5rem);
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  letter-spacing: 0.02em;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover::before {
  transform: translateX(0);
}

.cta-button.sponsoring {
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
  box-shadow: 0 10px 40px rgba(91, 124, 255, 0.3);
}

.cta-button.sponsoring:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 60px rgba(91, 124, 255, 0.5);
}

.cta-button.contact {
  background: transparent;
  color: #FFFFFF;
  border: 2px solid rgba(91, 124, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.cta-button.contact:hover {
  border-color: #5B7CFF;
  background: rgba(91, 124, 255, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(91, 124, 255, 0.2);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: clamp(2rem, 4vw, 3rem);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: fadeIn 1s ease-out 1s both, bounce 2s ease-in-out infinite;
  cursor: pointer;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

.scroll-indicator-text {
  font-size: 0.85rem;
  color: #7A8AB5;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-indicator-icon {
  width: 24px;
  height: 36px;
  border: 2px solid rgba(91, 124, 255, 0.4);
  border-radius: 12px;
  position: relative;
}

.scroll-indicator-icon::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: #5B7CFF;
  border-radius: 2px;
  animation: scrollDot 2s ease-in-out infinite;
}

@keyframes scrollDot {
  0%, 100% { top: 6px; opacity: 1; }
  50% { top: 18px; opacity: 0.3; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: clamp(1.5rem, 5vw, 2rem) clamp(1rem, 4vw, 1.5rem);
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
  
  .cta-button {
    width: 100%;
  }
  
  .scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-logo {
    width: clamp(150px, 50vw, 250px);
  }
  
  .particles-container {
    display: none;
  }
}

/* Préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .particle,
  .grid-background {
    animation: none;
    opacity: 0.02;
  }
}

/* Support tactile */
@media (hover: none) {
  .cta-button:active {
    transform: scale(0.95);
  }
  
  .hero-logo:active {
    transform: scale(0.95);
  }
}

/* Mode paysage mobile */
@media (max-height: 600px) and (orientation: landscape) {
  .hero-section {
    min-height: auto;
    padding: clamp(1rem, 3vw, 2rem) clamp(1rem, 4vw, 2rem);
  }
  
  .logo-container {
    margin-bottom: 1rem;
  }
  
  .hero-logo {
    width: clamp(120px, 25vw, 200px);
  }
  
  .tagline {
    min-height: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .scroll-indicator {
    display: none;
  }
}

/* Ultra-larges écrans */
@media (min-width: 1920px) {
  .hero-section {
    max-width: 1600px;
  }
}
`;

const TaglineRotator = memo(() => {
  const texts = [
    "Data Science",
    "Intelligence Artificielle",
    "Management de Données",
    "Automatisation",
    "Agents IA",
    "Analyse de Données & Aide a la decision",
    "Ingenierie de donnees",
    "Securite des donnees & Systemes",
    "Applications Web & Mobile"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeIn(false);
    }, 2500);

    const rotationTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setFadeIn(true);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(rotationTimer);
    };
  }, [currentIndex, texts.length]);

  return (
    <span className={`tagline-text ${fadeIn ? 'fade-in' : 'fade-out'}`}>
      {texts[currentIndex]}
    </span>
  );
});

TaglineRotator.displayName = "TaglineRotator";

function Home() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Générer les particules une seule fois
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      drift: (Math.random() - 0.5) * 200
    }));
    setParticles(newParticles);
  }, []);

  const handleSponsoringClick = useCallback(() => {
    window.open('https://wa.me/212716990681', '_blank');
  }, []);

  const handleContactClick = useCallback((e) => {
    e.preventDefault();
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScrollClick = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section id="home" className="home-container">
        {/* Grille de fond */}
        <div className="grid-background" aria-hidden="true"></div>
        
        {/* Particules flottantes */}
        <div className="particles-container" aria-hidden="true">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                '--duration': `${particle.duration}s`,
                '--delay': `${particle.delay}s`,
                '--drift': `${particle.drift}px`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="logo-container">
              <img 
                src={logoImage}
                alt="DigiScia Logo" 
                className="hero-logo"
              />
            </div>
            
            <div className="hero-text">
              <h1 className="welcome-text">Bienvenue sur</h1>
              <h2 className="brand-name">DigiScia</h2>
              <h3 className="tagline">
                <TaglineRotator />
              </h3>
              
              <div className="cta-buttons">
                <button 
                  className="cta-button sponsoring" 
                  onClick={handleSponsoringClick}
                  aria-label="Ouvrir WhatsApp pour un partenariat"
                >
                  Partenariat
                </button>
                <a 
                  href="#contacts" 
                  className="cta-button contact"
                  onClick={handleContactClick}
                  aria-label="Naviguer vers la section contact"
                >
                  Nous Contacter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="scroll-indicator" 
          onClick={handleScrollClick}
          aria-label="Défiler vers le bas"
          role="button"
          tabIndex={0}
        >
          <span className="scroll-indicator-text">Scroll</span>
          <div className="scroll-indicator-icon"></div>
        </div>
      </section>
    </>
  );
}

export default Home;