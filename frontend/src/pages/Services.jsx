import React, { useMemo, useState, useEffect, useCallback } from "react";

// Ajout des styles pour le Modal, fusionnés avec les styles existants
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

.services-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
}

/* Fond animé avec gradient */
.services-section::before {
  content: '';
  position: fixed;
  top: -30%;
  left: -10%;
  width: 80%;
  height: 120%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.15) 0%, transparent 70%);
  animation: floatGradient 30s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

.services-section::after {
  content: '';
  position: fixed;
  bottom: -30%;
  right: -10%;
  width: 70%;
  height: 100%;
  background: radial-gradient(circle, rgba(139, 163, 255, 0.1) 0%, transparent 70%);
  animation: floatGradient 25s infinite ease-in-out reverse;
  pointer-events: none;
  z-index: 0;
}

@keyframes floatGradient {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-20px, -30px) scale(1.1); }
  66% { transform: translate(20px, 30px) scale(0.9); }
}

/* Grille de points décorative */
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle, rgba(91, 124, 255, 0.15) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.services-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header de la section */
.services-header {
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  animation: fadeInUp 0.8s ease-out;
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

.services-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(91, 124, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 124, 255, 0.3);
  padding: clamp(0.5rem, 1.5vw, 0.65rem) clamp(1rem, 2.5vw, 1.25rem);
  border-radius: 50px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 500;
  color: #B8C5E0;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.services-badge:hover {
  transform: translateY(-2px);
  border-color: #5B7CFF;
  background: rgba(91, 124, 255, 0.15);
}

.badge-icon {
  width: 16px;
  height: 16px;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.services-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.services-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #B8C5E0;
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grille des services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

/* Carte de service */
.service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(1.5rem, 3vw, 2rem);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: cardFadeIn 0.6s ease-out forwards;
  overflow: hidden;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card.stagger-1 { animation-delay: 0.1s; }
.service-card.stagger-2 { animation-delay: 0.2s; }
.service-card.stagger-3 { animation-delay: 0.3s; }
.service-card.stagger-4 { animation-delay: 0.4s; }
.service-card.stagger-5 { animation-delay: 0.5s; }
.service-card.stagger-6 { animation-delay: 0.6s; }

/* Barre de couleur supérieure */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--card-gradient-start), var(--card-gradient-end));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 20px 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
}

/* Icône du service */
.service-icon {
  width: clamp(56px, 10vw, 72px);
  height: clamp(56px, 10vw, 72px);
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.2) 0%, rgba(91, 124, 255, 0.05) 100%);
  border: 2px solid rgba(91, 124, 255, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 10px 30px rgba(91, 124, 255, 0.3);
  border-color: #5B7CFF;
}

.service-icon::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .service-icon::after {
  opacity: 1;
}

.service-icon svg {
  width: clamp(28px, 5vw, 36px);
  height: clamp(28px, 5vw, 36px);
  color: #5B7CFF;
  z-index: 1;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon svg {
  color: #8BA3FF;
}

/* Contenu de la carte */
.service-card-title {
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.service-card-description {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: #B8C5E0;
  line-height: 1.7;
  margin-bottom: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 300;
  flex-grow: 1;
}

/* Lien "En savoir plus" */
.service-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 500;
  color: #5B7CFF;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
}

.service-card:hover .service-card-link {
  gap: 0.75rem;
  color: #8BA3FF;
}

.service-card-link svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.service-card:hover .service-card-link svg {
  transform: translateX(4px);
}

/* Badge de catégorie */
.service-category {
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  padding: clamp(0.3rem, 1vw, 0.4rem) clamp(0.6rem, 1.5vw, 0.8rem);
  background: rgba(91, 124, 255, 0.15);
  border: 1px solid rgba(91, 124, 255, 0.3);
  border-radius: 20px;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  font-weight: 500;
  color: #8BA3FF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.service-card:hover .service-category {
  opacity: 1;
  transform: translateY(0);
}

/* Skeleton loading */
.skeleton-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(1.5rem, 3vw, 2rem);
  min-height: 300px;
  position: relative;
  overflow: hidden;
}

.skeleton-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(91, 124, 255, 0.1),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.skeleton-icon {
  width: clamp(56px, 10vw, 72px);
  height: clamp(56px, 10vw, 72px);
  background: rgba(91, 124, 255, 0.1);
  border-radius: 16px;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.skeleton-title {
  height: 24px;
  background: rgba(91, 124, 255, 0.1);
  border-radius: 6px;
  margin-bottom: 1rem;
  width: 80%;
}

.skeleton-text {
  height: 16px;
  background: rgba(91, 124, 255, 0.05);
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.skeleton-text:first-of-type { width: 100%; }
.skeleton-text:nth-of-type(2) { width: 90%; }
.skeleton-text:last-of-type { width: 70%; }

/* === STYLES DU MODAL === */
.service-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 9, 61, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.service-modal.active {
  opacity: 1;
  pointer-events: all;
}

.modal-content {
  background: rgba(10, 20, 70, 0.8);
  border: 1px solid rgba(91, 124, 255, 0.3);
  border-radius: 24px;
  padding: clamp(1.5rem, 4vw, 3rem);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.95);
  transition: transform 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.service-modal.active .modal-content {
  transform: scale(1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(91, 124, 255, 0.2);
}

.modal-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.2;
}

.modal-close-btn {
  background: rgba(91, 124, 255, 0.1);
  border: 1px solid rgba(91, 124, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #B8C5E0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.modal-close-btn:hover {
  background: rgba(91, 124, 255, 0.2);
  color: #FFFFFF;
  transform: rotate(90deg);
}

.modal-body {
  color: #B8C5E0;
  line-height: 1.7;
}

.modal-body p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  margin-bottom: 1.5rem;
}

.modal-body h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  color: #8BA3FF;
  margin-top: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.modal-body ul {
  list-style: none;
  padding-left: 0;
}

.modal-body li {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 0.75rem;
  font-size: clamp(0.95rem, 2vw, 1rem);
}

.modal-body li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: #5B7CFF;
  font-weight: 600;
  font-size: 1.2rem;
}

/* === FIN STYLES MODAL === */


/* Responsive Design */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .services-section {
    padding: clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 1.5rem);
  }
  
  .service-card {
    min-height: 260px;
  }
  
  .modal-content {
    padding: clamp(1.5rem, 5vw, 2rem);
  }
}

@media (max-width: 480px) {
  .service-category {
    position: static;
    margin-bottom: 1rem;
    opacity: 1;
    transform: none;
    display: inline-block;
  }
}

/* Préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .service-card {
    opacity: 1;
  }
  
  .service-card:hover {
    transform: none;
  }
  
  .service-icon {
    transform: none;
  }
}

/* Support des encoches */
@supports (padding: max(0px)) {
  .services-section {
    padding-left: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-left));
    padding-right: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-right));
  }
}
`;

// ===== COMPOSANTS D'ICÔNES (du Fichier 1) =====
const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const DataIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const SparklesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L14 10L21 12L14 14L12 21L10 14L3 12L10 10L12 3Z"/>
  </svg>
);

// ===== COMPOSANT MODAL (Nouveau) =====
const ServiceDetailModal = React.memo(({ service, onClose }) => {
  // Gère la fermeture en cliquant sur l'overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Gère la fermeture avec la touche Echap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="service-modal active"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" role="document">
        <div className="modal-header">
          <h3 id="modal-title" className="modal-title">{service.title}</h3>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{service.fullDescription}</p>
          
          {service.features && service.features.length > 0 && (
            <>
              <h4>Points Clés</h4>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {service.useCases && (
            <>
              <h4>Cas d'Usage</h4>
              <p>{service.useCases}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

ServiceDetailModal.displayName = 'ServiceDetailModal';


// ===== COMPOSANT SKELETON =====
const ServiceCardSkeleton = React.memo(() => (
  <div className="skeleton-card" role="status" aria-label="Chargement du service">
    <div className="skeleton-icon"></div>
    <div className="skeleton-title"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

// ===== COMPOSANT CARTE DE SERVICE =====
const ServiceCard = React.memo(({ service, index, onServiceClick }) => {
  const handleClick = useCallback(() => {
    onServiceClick?.(service);
  }, [onServiceClick, service]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <article
      className={`service-card stagger-${index + 1}`}
      role="button"
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`En savoir plus sur ${service.title}`}
      style={{
        '--card-gradient-start': service.gradientStart,
        '--card-gradient-end': service.gradientEnd
      }}
    >
      <div className="service-category">{service.category}</div>
      <div className="service-icon">
        {service.icon}
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-description">{service.description}</p>
      <span className="service-card-link">
        En savoir plus
        <ArrowRightIcon />
      </span>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

// ===== COMPOSANT PRINCIPAL =====
function Services() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null); // État pour le modal

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Données fusionnées ( riches de Fichier 2 + styles de Fichier 1)
  const services = useMemo(() => [
    {
      id: "web-mobile",
      title: "Développement Web & Mobile",
      description: "Applications web modernes et mobiles avec les dernières technologies React, Vue.js et React Native.",
      icon: <WebIcon />,
      category: "Développement",
      gradientStart: "#5B7CFF",
      gradientEnd: "#8BA3FF",
      fullDescription: "Nous concevons et développons des applications web robustes et des expériences mobiles fluides, en utilisant des frameworks de pointe comme React, Vue.js pour le web, et React Native pour des applications multiplateformes performantes. Nos solutions sont responsives, optimisées pour la performance et l'expérience utilisateur, et conçues pour évoluer avec vos besoins.",
      features: [
        "Développement Front-end (React, Vue.js, Angular)",
        "Développement Back-end (Node.js, Python, PHP)",
        "Applications Mobiles NATIVES et Hybrides (React Native, Flutter)",
        "UX/UI Design intuitif et responsive",
        "Intégration d'API et microservices"
      ],
      useCases: "Sites e-commerce, plateformes SaaS, applications métier, portails clients, MVP de startups."
    },
    {
      id: "ai",
      title: "Intelligence Artificielle",
      description: "Solutions d'IA personnalisées, machine learning et deep learning pour automatiser vos processus.",
      icon: <AIIcon />,
      category: "IA & ML",
      gradientStart: "#8B5CF6",
      gradientEnd: "#A78BFA",
      fullDescription: "Exploitez le potentiel de l'intelligence artificielle pour transformer vos opérations. Nous développons des modèles de Machine Learning et de Deep Learning sur mesure, de la reconnaissance d'images à l'analyse prédictive, en passant par le traitement du langage naturel (NLP). Nos solutions IA sont intégrées de manière transparente à votre infrastructure existante.",
      features: [
        "Machine Learning & Deep Learning",
        "Traitement du Langage Naturel (NLP)",
        "Vision par Ordinateur",
        "Analyse Prédictive et Recommandation",
        "Bots conversationnels et assistants virtuels"
      ],
      useCases: "Optimisation de processus, personnalisation de l'expérience client, détection de fraudes, maintenance prédictive, analyse de données non structurées."
    },
    {
      id: "governance",
      title: "Governance des Données",
      description: "Stratégies de gouvernance des données pour assurer qualité, sécurité et conformité.",
      icon: <DataIcon />,
      category: "Gouvernance",
      gradientStart: "#06B6D4",
      gradientEnd: "#22D3EE",
      fullDescription: "La gouvernance des données est essentielle pour une gestion efficace et conforme de votre patrimoine informationnel. Nous vous aidons à établir des politiques, des processus et des rôles clairs pour garantir la qualité, la sécurité, la confidentialité et la conformité réglementaire de vos données, tout en maximisant leur valeur pour votre entreprise.",
      features: [
        "Audit et Évaluation de la Maturité des Données",
        "Définition de Politiques de Données",
        "Gestion de la Qualité des Données (DQM)",
        "Conformité Réglementaire (RGPD, HIPAA, etc.)",
        "Sécurité et Confidentialité des Données"
      ],
      useCases: "Mise en conformité RGPD, amélioration de la fiabilité des rapports, réduction des risques liés aux données, optimisation des processus décisionnels."
    },
    {
      id: "bi",
      title: "Business Intelligence",
      description: "Tableaux de bord interactifs et rapports analytiques pour une prise de décision éclairée.",
      icon: <ChartIcon />, // Utilisation de ChartIcon (Fichier 1)
      category: "Analytics",
      gradientStart: "#10B981",
      gradientEnd: "#34D399",
      fullDescription: "Transformez vos données brutes en informations exploitables avec nos solutions de Business Intelligence. Nous concevons et implémentons des tableaux de bord interactifs, des rapports personnalisés et des outils d'analyse avancés qui vous offrent une vue à 360 degrés de vos performances, facilitant ainsi la prise de décisions stratégiques.",
      features: [
        "Conception et Développement de Tableaux de Bord",
        "Reporting Automatisé",
        "Analyse Ad-hoc et Exploration de Données",
        "Intégration de Sources de Données Multiples",
        "Formation et Support aux Utilisateurs"
      ],
      useCases: "Suivi des ventes, analyse financière, optimisation marketing, performance opérationnelle, compréhension du comportement client."
    },
    {
      id: "data-management",
      title: "Management des données",
      description: "Architecture et gestion de bases de données scalables pour optimiser vos performances.",
      icon: <CloudIcon />, // Utilisation de CloudIcon (Fichier 1)
      category: "Infrastructure",
      gradientStart: "#F59E0B",
      gradientEnd: "#FBBF24",
      fullDescription: "Une gestion de données efficace est le pilier de toute stratégie digitale réussie. Nous vous accompagnons dans la conception, l'implémentation et la maintenance de vos infrastructures de données, qu'il s'agisse de bases de données relationnelles, NoSQL, ou de data lakes. Nous nous assurons que vos données sont accessibles, sécurisées et performantes.",
      features: [
        "Modélisation et Conception de Bases de Données",
        "Optimisation des Performances (SQL/NoSQL)",
        "Migration de Données",
        "Sécurité et Sauvegarde des Données",
        "Intégration et ETL (Extract, Transform, Load)"
      ],
      useCases: "Centralisation des données, amélioration des temps de réponse des applications, préparation des données pour l'analyse, réduction des coûts de stockage."
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      description: "Infrastructure cloud moderne, CI/CD et automatisation pour accélérer vos déploiements.",
      icon: <CodeIcon />, // Utilisation de CodeIcon (Fichier 1)
      category: "Cloud",
      gradientStart: "#EF4444",
      gradientEnd: "#F87171",
      fullDescription: "Accélérez le cycle de vie de vos applications et optimisez votre infrastructure avec nos services DevOps et Cloud. Nous mettons en place des pipelines CI/CD robustes, des infrastructures as Code (IaC) et des stratégies de déploiement continu sur les principales plateformes cloud (AWS, Azure, GCP), garantissant rapidité, fiabilité et scalabilité.",
      features: [
        "Mise en place de CI/CD (Jenkins, GitLab CI, GitHub Actions)",
        "Infrastructure as Code (Terraform, Ansible)",
        "Conteneurisation (Docker, Kubernetes)",
        "Migration et Optimisation Cloud (AWS, Azure, GCP)",
        "Surveillance et Logging (Prometheus, Grafana, ELK Stack)"
      ],
      useCases: "Déploiement rapide de nouvelles fonctionnalités, réduction des erreurs de production, scalabilité des applications, optimisation des coûts cloud."
    },
  ], []);

  // Ouvre le modal
  const handleServiceClick = useCallback((service) => {
    setSelectedService(service);
  }, []);

  // Ferme le modal
  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  const serviceGrid = useMemo(() => (
    <div className="services-grid" role="list">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          onServiceClick={handleServiceClick}
        />
      ))}
    </div>
  ), [services, handleServiceClick]);

  const skeletonGrid = useMemo(() => (
    <div className="services-grid" aria-busy="true">
      {Array.from({ length: 6 }, (_, index) => (
        <ServiceCardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  ), []);

  return (
    <>
      <style>{styles}</style>
      <section
        className="services-section"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="grid-overlay" aria-hidden="true"></div>
        
        <div className="services-container">
          <header className="services-header">
            <div className="services-badge">
              <SparklesIcon className="badge-icon" />
              Nos Expertises
            </div>
            <h2 id="services-title" className="services-title">
              Services & Solutions
            </h2>
            <p className="services-subtitle">
              Des solutions technologiques sur mesure pour transformer votre vision en réalité digitale et propulser votre entreprise vers le futur
            </p>
          </header>

          {isLoading ? skeletonGrid : serviceGrid}
        </div>
        
        {/* Le modal est rendu ici, en dehors du container principal pour un z-index correct */}
        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={handleCloseModal}
          />
        )}
      </section>
    </>
  );
}

export default Services;