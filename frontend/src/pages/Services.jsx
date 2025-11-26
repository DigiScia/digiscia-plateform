import React, { useState, useEffect } from "react";
import { 
  FaLaptopCode, 
  FaBrain, 
  FaDatabase, 
  FaChartLine, 
  FaRobot, // Nouvelle icône pour les agents
  FaArrowRight, 
  FaCheck,
  FaTimes
} from 'react-icons/fa';

// === STYLES CSS (Monochrome Premium & Glassmorphism) ===
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', sans-serif;
  background: #00093D;
  color: #FFFFFF;
  overflow-x: hidden;
}

.services-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(4rem, 6vw, 8rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
  
  /* Texture subtile */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Effets de lumière d'ambiance */
.ambient-glow {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 60vh;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

.services-container {
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
}

/* Header */
.services-header {
  text-align: center;
  margin-bottom: clamp(4rem, 6vw, 6rem);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.badge-pill {
  display: inline-block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.services-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.services-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grille */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

/* Carte Service */
.service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
  opacity: 0;
  animation: cardFadeIn 0.6s ease-out forwards;
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

@keyframes cardFadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Icon Container */
.service-icon-wrapper {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  font-size: 1.8rem;
  color: #FFFFFF;
}

.service-card:hover .service-icon-wrapper {
  background: #FFFFFF;
  color: #00093D; /* Le bleu logo */
  transform: scale(1.1) rotate(-5deg);
}

.service-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 1rem;
}

.service-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #FFFFFF;
  text-decoration: none;
  margin-top: auto;
  opacity: 0.8;
  transition: 0.3s;
}

.service-card:hover .service-link {
  opacity: 1;
  gap: 1rem;
}

/* Badge Catégorie */
.service-cat {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
}

/* === MODAL === */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 9, 61, 0.9);
  backdrop-filter: blur(15px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal-overlay.active { opacity: 1; pointer-events: all; }

.modal-content {
  background: #00093D;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 3rem;
  position: relative;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-overlay.active .modal-content { transform: translateY(0); }

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
}

.close-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}

.close-btn:hover { background: #FFFFFF; color: #00093D; }

.modal-body { color: rgba(255, 255, 255, 0.8); line-height: 1.8; }
.modal-intro { font-size: 1.1rem; margin-bottom: 2rem; font-weight: 300; }

.modal-subtitle {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  color: #FFFFFF;
  margin: 2rem 0 1rem;
}

.features-list { list-style: none; display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 600px) { .features-list { grid-template-columns: 1fr 1fr; } }

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
}

.check-icon { color: #fff; font-size: 0.8rem; opacity: 0.7; }

/* Skeleton */
.skeleton {
  background: rgba(255,255,255,0.03);
  border-radius: 24px;
  min-height: 320px;
  animation: pulse 1.5s infinite;
}
@keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }

/* Responsive */
@media (max-width: 768px) {
  .services-section { padding-top: 6rem; }
  .services-title { font-size: 2.5rem; }
  .modal-content { padding: 1.5rem; }
}
`;

// === DONNÉES DES SERVICES ===
const servicesData = [
  {
    id: "web-mobile",
    title: "Développement Web & Mobile",
    category: "Engineering",
    description: "Des applications sur-mesure, performantes et évolutives qui transforment l'expérience de vos utilisateurs.",
    icon: <FaLaptopCode />,
    fullDescription: "Dans un monde digital-first, votre présence numérique est votre vitrine principale. Nous ne nous contentons pas d'écrire du code ; nous architecturons des écosystèmes digitaux complets. Que ce soit pour une application métier complexe ou une plateforme grand public, nous allions performance technique, sécurité robuste et design centré utilisateur.",
    features: [
      "Architectures Modernes (React, Vue, Node.js)",
      "Applications Mobiles Cross-Platform (React Native)",
      "Progressive Web Apps (PWA)",
      "Refonte UX/UI & Design System",
      "API REST & GraphQL Scalables"
    ],
    useCases: "Plateformes SaaS, Marketplaces, Portails clients sécurisés, MVP pour Startups."
  },
  {
    id: "ai",
    title: "IA & Data Science",
    category: "Innovation",
    description: "Passez de la donnée brute à la prédiction stratégique. Automatisez l'intelligence de votre entreprise.",
    icon: <FaBrain />,
    fullDescription: "L'intelligence artificielle n'est plus de la science-fiction, c'est un levier de compétitivité immédiat. Nos Data Scientists transforment vos gisements de données en algorithmes prédictifs puissants. Nous vous aidons à anticiper les tendances, automatiser les tâches cognitives répétitives et personnaliser l'expérience de vos clients à grande échelle.",
    features: [
      "Machine Learning & Deep Learning",
      "Traitement du Langage Naturel (NLP/LLM)",
      "Vision par Ordinateur (Computer Vision)",
      "Systèmes de Recommandation",
      "Maintenance Prédictive"
    ],
    useCases: "Chatbots intelligents, Détection de fraude, Analyse de sentiment, Optimisation logistique."
  },
  {
    id: "data-eng",
    title: "Ingénierie des Données",
    category: "Infrastructure",
    description: "Construisez le socle de votre stratégie data. Pipelines robustes, qualité garantie et gouvernance maîtrisée.",
    icon: <FaDatabase />,
    fullDescription: "Une stratégie IA efficace repose sur des données saines. Nous construisons les autoroutes de l'information de votre entreprise. De l'ingestion à la mise à disposition, nous concevons des architectures de données (Data Lakes, Warehouses) sécurisées, conformes et capables de traiter des volumes massifs en temps réel.",
    features: [
      "Architecture Data Lake & Warehouse",
      "Pipelines ETL/ELT temps réel",
      "Gouvernance & Qualité des données (DQM)",
      "Conformité RGPD & Sécurité",
      "Migration Cloud (AWS, Azure, GCP)"
    ],
    useCases: "Centralisation des données (Single Source of Truth), Nettoyage de bases de données, Migration Legacy."
  },
  {
    id: "bi",
    title: "Business Intelligence",
    category: "Analytics",
    description: "Visualisez pour décider. Des tableaux de bord interactifs qui racontent l'histoire de votre performance.",
    icon: <FaChartLine />,
    fullDescription: "Ne conduisez plus à l'aveugle. Nous transformons la complexité de vos métriques en visualisations claires et actionnables. Nos experts BI conçoivent des outils d'aide à la décision qui permettent à vos équipes, du management à l'opérationnel, de suivre les KPIs essentiels et de réagir instantanément aux évolutions du marché.",
    features: [
      "Tableaux de bord interactifs (PowerBI, Tableau)",
      "Storytelling de données",
      "Reporting automatisé",
      "Analyse de performance 360°",
      "Formation à la culture Data"
    ],
    useCases: "Pilotage commercial, Suivi financier, Monitoring RH, Analyse de performance marketing."
  },
  // MISE À JOUR : AUTOMATISATION MÉTIER & AGENTS
  {
    id: "automatisation",
    title: "Automatisation & Agents IA",
    category: "Productivité",
    description: "Libérez vos équipes des tâches répétitives grâce à des agents autonomes et des workflows intelligents.",
    icon: <FaRobot />,
    fullDescription: "Boostez votre efficacité opérationnelle en déléguant les processus métiers complexes à nos solutions d'automatisation. Nous déployons des architectures hybrides combinant la fiabilité des scripts programmés (Crons), la connectivité des APIs et l'intelligence des Agents IA capables de prendre des décisions et d'agir. Votre entreprise tourne 24/7, sans erreur humaine.",
    features: [
      "Agents IA Autonomes & Chatbots",
      "Orchestration de tâches planifiées (Crons, Queues)",
      "Intégration API & Webhooks sur-mesure",
      "Traitement Intelligent de Documents (OCR/IDP)",
      "Workflows Multi-plateformes (CRM, ERP, Slack)"
    ],
    useCases: "Qualification automatique de leads, Traitement de factures, Support client niveau 1, Synchronisation de stocks."
  }
];

// === COMPOSANT MODAL ===
const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase'}}>{service.category}</span>
            <h3 className="modal-title">{service.title}</h3>
          </div>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>
        
        <div className="modal-body">
          <p className="modal-intro">{service.fullDescription}</p>
          
          <h4 className="modal-subtitle">Expertises Clés</h4>
          <ul className="features-list">
            {service.features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <span className="check-icon"><FaCheck /></span> {feature}
              </li>
            ))}
          </ul>

          <h4 className="modal-subtitle">Cas d'usage</h4>
          <p style={{fontStyle: 'italic', opacity: 0.8}}>{service.useCases}</p>
        </div>
      </div>
    </div>
  );
};

// === COMPOSANT PRINCIPAL ===
function Services() {
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section className="services-section" id="services">
        <div className="ambient-glow"></div>

        <div className="services-container">
          {/* HEADER */}
          <div className="services-header">
            <span className="badge-pill">Savoir-Faire & Innovation</span>
            <h2 className="services-title">Nos Domaines d'Expertise</h2>
            <p className="services-subtitle">
              Nous combinons ingénierie logicielle rigoureuse et science des données avancée pour bâtir les fondations numériques de votre succès futur.
            </p>
          </div>

          {/* GRID */}
          <div className="services-grid">
            {loading ? (
              // SKELETON LOADING
              Array(3).fill(0).map((_, i) => <div key={i} className="skeleton"></div>)
            ) : (
              // SERVICE CARDS
              servicesData.map((service, index) => (
                <div 
                  key={service.id} 
                  className="service-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedService(service)}
                >
                  <span className="service-cat">{service.category}</span>
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <span className="service-link">
                    Explorer l'offre <FaArrowRight />
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* MODAL */}
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </section>
    </>
  );
}

export default Services;