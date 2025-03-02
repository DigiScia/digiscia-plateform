import React from "react";
import "./Home.css";
import logoImage from "../assets/logobleu.jpg";

function TaglineRotator() {
  const texts = [
    "Data Science",
    "Intelligence Artificielle",
    "Web & Mobile",
    "Big Data",
    "Systeme d'Informations Géographiques",
    "Automatisme",
    "Cybersécurité",
    "Internet Of Things"
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return <span>{texts[currentIndex]}</span>;
}

function Home() {
  return (
    <div className="home-container">
      <main className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <img src={logoImage} alt="DigiScia Logo" className="hero-logo" />
          </div>
          <div className="hero-text">
            <h1 className="welcome-text">Bienvenue sur</h1>
            <h2 className="brand-name">DigiScia</h2>
            <h3 className="tagline">
              <TaglineRotator />
            </h3>
            <div className="cta-buttons">
              <button className="cta-button sponsoring">Sponsoring</button>
              <a href="#contacts" className="cta-button contact">
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;