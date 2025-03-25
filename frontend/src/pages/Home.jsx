import React, { useState, useEffect, useCallback, memo } from "react";
import "./Home.css";
import logoImage from "../assets/logobleu.jpg";

// Composant mémorisé pour éviter les re-renders inutiles
const TaglineRotator = memo(() => {
  const texts = [
    "Data Science",
    "Intelligence Artificielle",
    "Web & Mobile",
    "Big Data",
    "Systeme d'Informations Géographiques",
    "Robotique & Automatisation",
    "Formations",

  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Effet pour la rotation des textes avec animation de fondu
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeIn(false);
    }, 1500);

    const rotationTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setFadeIn(true);
    }, 2000);

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
  // Fonction mémorisée pour éviter les re-renders inutiles
  const handleSponsoringClick = useCallback(() => {
    window.open(`https://wa.me/212716990681`, "_blank");
  }, []);

  // Fonction mémorisée pour la navigation douce
  const handleContactClick = useCallback((e) => {
    e.preventDefault();
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="home" className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <img 
              src={logoImage} 
              alt="DigiScia Logo" 
              className="hero-logo" 
              loading="eager" 
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
                aria-label="Ouvrir WhatsApp pour le sponsoring"
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
    </section>
  );
}

export default Home;