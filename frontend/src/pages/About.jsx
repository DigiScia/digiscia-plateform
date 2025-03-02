import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">À propos de DigiScia</h2>
        <p className="about-description">
          DigiScia est une plateforme dédiée à la science des données, à l'intelligence artificielle et à d'autres domaines technologiques innovants. Notre mission est d'accompagner nos clients dans la maîtrise des dernières tendances et technologies pour transformer leurs idées en réalité.
        </p>
        <div className="vision">
          <p className="about-description">
            DigiScia aspire à transformer l'écosystème technologique africain en mettant la donnée au cœur de la prise de décision et de l’innovation. Nous voulons créer un environnement où les talents locaux, les entreprises et les institutions peuvent exploiter la puissance de la data et de l’IA pour répondre aux défis économiques, sociaux et environnementaux.
          </p>
        </div>
        <div className="missions">
          <p className="about-description">
            Nos missions sont de :
          </p>
          <ul>
            <li>
              Former et outiller les talents africains en proposant des formations de qualité en IT, en data science et en intelligence artificielle, adaptées aux besoins du marché.
            </li>
            <li>
              Développer des solutions innovantes basées sur la data et l’IA pour répondre aux problématiques spécifiques des entreprises, des gouvernements et des startups africaines.
            </li>
            <li>
              Collecter et structurer des données locales pour combler le déficit de datasets pertinents et alimenter les modèles d’intelligence artificielle avec une vision adaptée au contexte africain.
            </li>
            <li>
              Accompagner les entreprises et institutions à travers des services de consulting, en les aidant à adopter des stratégies basées sur les données pour optimiser leurs décisions et améliorer leur compétitivité.
            </li>
          </ul>
        </div>
      </div>
      <div className="about-graphic"></div>
    </div>
  );
}

export default About;