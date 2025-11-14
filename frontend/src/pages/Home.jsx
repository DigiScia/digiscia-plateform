import React, { useState, useEffect, useCallback } from "react";
import logoImage from "../assets/logobleu.jpg";
import "./Home.css"; // Importation du CSS externe

// Le TaglineRotator a été supprimé pour un design plus épuré

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
      {/* Le tag <style> a été déplacé dans Home.css */}
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
              
              {/* MODIFICATION : Rotateur de texte remplacé par un texte statique */}
              <h3 className="hero-tagline">
                Applications Web & Mobile
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