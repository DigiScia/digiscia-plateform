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
import { useTranslation } from "react-i18next";
import "./About.css"; 

function About() {
  const { t } = useTranslation();
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
          <span className="badge-pill">{t('about.badge')}</span>
          <h1 className="about-title" dangerouslySetInnerHTML={{ __html: t('about.title') }}></h1>
          <p className="about-intro">
           {t('about.intro')}
          </p>
          <a href="#contacts">
            <button className="btn-white">
              {t('about.cta')} <FaArrowRight />
            </button>
          </a>
        </header>

        {/* GRILLE BENTO (Architecture principale) */}
        <div className="bento-grid">
          
          {/* 1. Carte Mission */}
          <div className="bento-card card-mission" ref={addToRefs}>
            <div className="icon-box"><FaRocket /></div>
            <h2 className="card-title">{t('about.mission.title')}</h2>
            <p className="card-text">
              {t('about.mission.text')}
            </p>
            <div className="tech-stack">
              {t('about.mission.pills', { returnObjects: true }).map((pill, idx) => (
                <span key={idx} className="tech-pill">{pill}</span>
              ))}
            </div>
          </div>

          {/* 2. Carte Chiffres Clés */}
          <div className="bento-card card-stats" ref={addToRefs}>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">{t('about.stats.compliance')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">{t('about.stats.support')}</span>
              </div>
            </div>
          </div>

          <div className="bento-card card-tech" ref={addToRefs}>
            <div className="icon-box"><FaCodeBranch /></div>
            <h2 className="card-title">{t('about.tech.title')}</h2>
            <p className="card-text">
              {t('about.tech.text')}
            </p>
          </div>

          {/* 4. Carte Intelligence Artificielle */}
          <div className="bento-card card-culture" ref={addToRefs}>
            <div className="icon-box"><FaBrain /></div>
            <h2 className="card-title">{t('about.ai.title')}</h2>
            <p className="card-text">
              {t('about.ai.text')}
            </p>
          </div>

        </div>

        {/* SECTION VALEURS (Bas de page) */}
        <div className="values-grid">
          
          <div className="value-card" ref={addToRefs}>
            <FaShieldAlt style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }} />
            <h3>{t('about.values.sovereignty.title')}</h3>
            <p>{t('about.values.sovereignty.text')}</p>
          </div>

          <div className="value-card" ref={addToRefs}>
            <FaChartLine style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }} />
            <h3>{t('about.values.performance.title')}</h3>
            <p>{t('about.values.performance.text')}</p>
          </div>

          <div className="value-card" ref={addToRefs}>
            <FaHandshake style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }} />
            <h3>{t('about.values.partnership.title')}</h3>
            <p>{t('about.values.partnership.text')}</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;