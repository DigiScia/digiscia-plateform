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
import { useTranslation } from "react-i18next";

// === STYLES CSS (Monochrome Premium & Glassmorphism) ===
const styles = `


* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-primary);
  color: #FFFFFF;
  overflow-x: hidden;
}

.services-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: var(--bg-primary);
  padding: clamp(4rem, 6vw, 8rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
  
  /* Texture subtile */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Effets de lumière d'ambiance */
.services-glow {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, rgba(91, 124, 255, 0.12) 0%, transparent 75%);
  filter: blur(120px);
  z-index: 0;
  pointer-events: none;
}
.services-glow--1 { top: -20%; left: -20%; }
.services-glow--2 { bottom: -20%; right: -20%; }

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

/* === LIGHT MODE (data-theme="light") === */
[data-theme="light"] body {
  background: #FFFFFF;
  color: #00093D;
}

[data-theme="light"] .services-section {
  background: #FFFFFF;
  background-image: 
    linear-gradient(rgba(0, 9, 61, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 9, 61, 0.03) 1px, transparent 1px);
}

[data-theme="light"] .ambient-glow {
  background: radial-gradient(circle, rgba(0, 9, 61, 0.08) 0%, transparent 70%);
}

[data-theme="light"] .badge-pill {
  color: #00093D;
  background: rgba(0, 9, 61, 0.1);
  border-color: rgba(0, 9, 61, 0.25);
}

[data-theme="light"] .services-title {
  color: #00093D;
}

[data-theme="light"] .services-subtitle {
  color: rgba(0, 9, 61, 0.7);
}

[data-theme="light"] .service-card {
  background: rgba(0, 9, 61, 0.02);
  border-color: rgba(0, 9, 61, 0.1);
}

[data-theme="light"] .service-card:hover {
  background: rgba(0, 9, 61, 0.05);
  border-color: rgba(0, 9, 61, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

[data-theme="light"] .service-icon-wrapper {
  background: rgba(0, 9, 61, 0.05);
  border-color: rgba(0, 9, 61, 0.1);
}

[data-theme="light"] .service-icon {
  color: #00093D;
}

[data-theme="light"] .service-title {
  color: #00093D;
}

[data-theme="light"] .service-desc {
  color: rgba(0, 9, 61, 0.7);
}

[data-theme="light"] .service-cat {
  color: rgba(0, 9, 61, 0.5);
  border-color: rgba(0, 9, 61, 0.1);
}

[data-theme="light"] .service-link {
  color: #00093D;
}

[data-theme="light"] .service-icon-wrapper {
  background: rgba(0, 9, 61, 0.05);
  border-color: rgba(0, 9, 61, 0.1);
  color: #00093D;
}

[data-theme="light"] .check-icon {
  color: #00093D;
}

[data-theme="light"] .skeleton {
  background: rgba(0, 9, 61, 0.03);
}

[data-theme="light"] .modal-content {
  background: #FFFFFF;
  border-color: rgba(0, 9, 61, 0.1);
}

[data-theme="light"] .modal-header {
  color: #00093D;
  border-bottom-color: rgba(0, 9, 61, 0.1);
}

[data-theme="light"] .modal-body {
  color: #00093D;
}

[data-theme="light"] .close-btn:hover {
  background: #00093D;
  color: #FFFFFF;
}

[data-theme="light"] .service-card:hover .service-icon-wrapper {
  background: #00093D;
  color: #FFFFFF;
}

[data-theme="light"] .modal-cat {
  color: rgba(0, 9, 61, 0.5) !important;
}

[data-theme="light"] .modal-usecases {
  color: #00093D;
}

[data-theme="light"] .feature-item {
  color: #00093D;
}

[data-theme="light"] .check-icon {
  color: #00093D !important;
}
`;

// === COMPOSANT MODAL ===
const ServiceModal = ({ service, onClose }) => {
  const { t } = useTranslation();
  
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
            <span className="modal-cat" style={{fontSize: '0.8rem', textTransform: 'uppercase'}}>{service.category}</span>
            <h3 className="modal-title">{service.title}</h3>
          </div>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>
        
        <div className="modal-body">
          <p className="modal-intro">{service.fullDescription}</p>
          
          <h4 className="modal-subtitle">{t('services.modal.expertise')}</h4>
          <ul className="features-list">
            {service.features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <span className="check-icon"><FaCheck /></span> {feature}
              </li>
            ))}
          </ul>

          <h4 className="modal-subtitle">{t('services.modal.usecases')}</h4>
          <p style={{fontStyle: 'italic', opacity: 0.8}} className="modal-usecases">{service.useCases}</p>
        </div>
      </div>
    </div>
  );
};

// === COMPOSANT PRINCIPAL ===
function Services() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  // === DONNÉES DES SERVICES (Traduit) ===
  const servicesData = [
    {
      id: "web-mobile",
      title: t('services.items.web.title'),
      category: t('services.items.web.cat'),
      description: t('services.items.web.desc'),
      icon: <FaLaptopCode />,
      fullDescription: t('services.items.web.full'),
      features: t('services.items.web.features', { returnObjects: true }),
      useCases: t('services.items.web.cases')
    },
    {
      id: "ai",
      title: t('services.items.ai.title'),
      category: t('services.items.ai.cat'),
      description: t('services.items.ai.desc'),
      icon: <FaBrain />,
      fullDescription: t('services.items.ai.full'),
      features: t('services.items.ai.features', { returnObjects: true }),
      useCases: t('services.items.ai.cases')
    },
    {
      id: "data-eng",
      title: t('services.items.data.title'),
      category: t('services.items.data.cat'),
      description: t('services.items.data.desc'),
      icon: <FaDatabase />,
      fullDescription: t('services.items.data.full'),
      features: t('services.items.data.features', { returnObjects: true }),
      useCases: t('services.items.data.cases')
    },
    {
      id: "bi",
      title: t('services.items.bi.title'),
      category: t('services.items.bi.cat'),
      description: t('services.items.bi.desc'),
      icon: <FaChartLine />,
      fullDescription: t('services.items.bi.full'),
      features: t('services.items.bi.features', { returnObjects: true }),
      useCases: t('services.items.bi.cases')
    },
    {
      id: "automatisation",
      title: t('services.items.auto.title'),
      category: t('services.items.auto.cat'),
      description: t('services.items.auto.desc'),
      icon: <FaRobot />,
      fullDescription: t('services.items.auto.full'),
      features: t('services.items.auto.features', { returnObjects: true }),
      useCases: t('services.items.auto.cases')
    }
  ];

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
            <span className="badge-pill">{t('services.badge')}</span>
            <h2 className="services-title">{t('services.title')}</h2>
            <p className="services-subtitle">
              {t('services.subtitle')}
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
                    {t('services.explore')} <FaArrowRight />
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