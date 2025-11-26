import React, { useEffect, useRef } from "react";
import { 
  FaRocket, 
  FaBrain, 
  FaShieldAlt, 
  FaCodeBranch, 
  FaHandshake,
  FaChartLine,
  FaArrowRight
} from 'react-icons/fa';
import "./About.css"; 

function About() {
  const cardsRef = useRef([]);

  // Animation simple d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach(card => {
      if (card) {
        // État initial avant animation
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="about-container" id="about">
      
      {/* Halo lumineux blanc */}
      <div className="about-glow"></div>
      
      <div className="about-inner">
        
        {/* EN-TÊTE */}
        <header className="about-header" ref={addToRefs}>
          <span className="badge-pill">DigiScia • Excellence Numérique</span>
          <h1 className="about-title">
            Vos données, <br/>
            notre priorité.
          </h1>
          <p className="about-intro">
            Nous transformons la complexité technologique en levier de croissance. 
            Une expertise ESN de pointe, axée sur la transparence et la performance.
          </p>
          <button className="btn-white">
            Démarrer un projet <FaArrowRight />
          </button>
        </header>

        {/* GRILLE BENTO (Architecture principale) */}
        <div className="bento-grid">
          
          {/* 1. Carte Mission */}
          <div className="bento-card card-mission" ref={addToRefs}>
            <div className="icon-box"><FaRocket /></div>
            <h2 className="card-title">Notre Mission</h2>
            <p className="card-text">
              Propulser les entreprises vers une souveraineté numérique totale. 
              Nous concevons des architectures de données fluides qui résistent à l'épreuve du temps et des volumes.
            </p>
            <div className="tech-stack">
              <span className="tech-pill">Audit & Stratégie</span>
              <span className="tech-pill">Architecture Data</span>
              <span className="tech-pill">Cloud Sécurisé</span>
            </div>
          </div>

          {/* 2. Carte Chiffres Clés */}
          <div className="bento-card card-stats" ref={addToRefs}>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Conformité RGPD</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Monitoring Actif</span>
              </div>
            </div>
          </div>

          {/* 3. Carte Ingénierie */}
          <div className="bento-card card-tech" ref={addToRefs}>
            <div className="icon-box"><FaCodeBranch /></div>
            <h2 className="card-title">Ingénierie Pure</h2>
            <p className="card-text">
              Pas de "Black Box". Nous livrons un code propre, documenté et maintenable par vos équipes.
            </p>
            <div className="tech-stack">
              <span className="tech-pill">Python</span>
              <span className="tech-pill">React</span>
              <span className="tech-pill">DevOps</span>
            </div>
          </div>

          {/* 4. Carte Intelligence Artificielle */}
          <div className="bento-card card-culture" ref={addToRefs}>
            <div className="icon-box"><FaBrain /></div>
            <h2 className="card-title">Intelligence Artificielle</h2>
            <p className="card-text">
              Passez de la donnée brute à la décision éclairée. Nos modèles de Machine Learning valorisent votre capital numérique pour prédire demain.
            </p>
          </div>

        </div>

        {/* SECTION VALEURS (Bas de page) */}
        <div className="values-grid">
          
          <div className="value-card" ref={addToRefs}>
            <FaShieldAlt style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }} />
            <h3>Souveraineté</h3>
            <p>Vos données sont votre actif le plus précieux. Nous garantissons leur intégrité et leur sécurité absolue.</p>
          </div>

          <div className="value-card" ref={addToRefs}>
            <FaChartLine style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }} />
            <h3>Performance</h3>
            <p>Des solutions mesurables. Nous ne vendons pas de buzzwords, mais des résultats concrets.</p>
          </div>

          <div className="value-card" ref={addToRefs}>
            <FaHandshake style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }} />
            <h3>Partenariat</h3>
            <p>Nous co-construisons avec vos équipes pour assurer un transfert de compétences réel.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;