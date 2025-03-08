import React from "react";
import "./About.css";
import { FaBrain, FaLaptopCode, FaDatabase, FaChartLine } from 'react-icons/fa';

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-header">
        <h2 className="about-title">À propos de DigiScia</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="about-main">
        <div className="about-content">
          <div className="about-intro">
            <p className="about-description">
              DigiScia est une plateforme dédiée à la science des données, à l'intelligence artificielle et à d'autres domaines technologiques innovants. Notre mission est d'accompagner nos clients dans la maîtrise des dernières tendances et technologies pour transformer leurs idées en réalité.
            </p>
            <div className="tech-icons">
              <div className="tech-icon">
                <div className="icon-circle">
                  <FaBrain />
                </div>
                <span>Intelligence Artificielle</span>
              </div>
              <div className="tech-icon">
                <div className="icon-circle">
                  <FaDatabase />
                </div>
                <span>Big Data</span>
              </div>
              <div className="tech-icon">
                <div className="icon-circle">
                  <FaChartLine />
                </div>
                <span>Data Science</span>
              </div>
              <div className="tech-icon">
                <div className="icon-circle">
                  <FaLaptopCode />
                </div>
                <span>Développement</span>
              </div>
            </div>
          </div>
          
          <div className="vision-section">
            <div className="section-header">
              <h3>Notre Vision</h3>
              <div className="africa-map-container">
                <div className="africa-map"></div>
                <div className="data-points">
                  <span className="data-point" style={{ top: '40%', left: '45%' }}></span>
                  <span className="data-point" style={{ top: '30%', left: '55%' }}></span>
                  <span className="data-point" style={{ top: '60%', left: '52%' }}></span>
                  <span className="data-point" style={{ top: '25%', left: '35%' }}></span>
                  <span className="data-point" style={{ top: '70%', left: '45%' }}></span>
                </div>
              </div>
            </div>
            <p className="about-description">
              DigiScia aspire à transformer l'écosystème technologique africain en mettant la donnée au cœur de la prise de décision et de l'innovation. Nous voulons créer un environnement où les talents locaux, les entreprises et les institutions peuvent exploiter la puissance de la data et de l'IA pour répondre aux défis économiques, sociaux et environnementaux.
            </p>
          </div>
          
          <div className="missions-section">
            <div className="section-header">
              <h3>Nos Missions</h3>
            </div>
            <div className="missions-grid">
              <div className="mission-card">
                <h4>Former la nouvelle génération de geeks</h4>
                <p>Proposer des formations de qualité en IT, en data science et en intelligence artificielle, adaptées aux besoins du marché.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">
                </div>
                <h4>Développer des solutions innovantes</h4>
                <p>Créer des solutions basées sur la data et l'IA pour répondre aux problématiques spécifiques des entreprises et startups africaines.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">
                </div>
                <h4>Collecter des données locales</h4>
                <p>Structurer des datasets pertinents et alimenter les modèles d'IA avec une vision adaptée au contexte africain.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">
                </div>
                <h4>Accompagner les entreprises</h4>
                <p>Offrir des services de consulting pour aider à adopter des stratégies basées sur les données et améliorer la compétitivité.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-graphic">
          <div className="circuit-illustration"></div>
          <div className="data-nodes">
            <div className="node node1"></div>
            <div className="node node2"></div>
            <div className="node node3"></div>
            <div className="node node4"></div>
            <div className="node node5"></div>
          </div>
        </div>
      </div>
      
      <div className="tech-background"></div>
    </div>
  );
}

export default About;