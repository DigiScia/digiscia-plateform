import React, { useState, useEffect, useCallback } from "react";
import { 
  FaLaptopCode, 
  FaDatabase, 
  FaChartLine, 
  FaRobot, 
  FaArrowRight
} from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import "./Services.css";
import ServiceDetailModal from "./ServiceDetailModal";

function Services() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const servicesData = [
    {
      id: "web",
      title: t('services.items.web.title'),
      shortTitle: "Web & Mobile",
      category: t('services.items.web.cat'),
      description: t('services.items.web.desc'),
      icon: <FaLaptopCode />,
      fullDescription: t('services.items.web.full'),
      features: t('services.items.web.features', { returnObjects: true }),
      useCases: t('services.items.web.cases')
    },
    {
      id: "bi",
      title: t('services.items.bi.title'),
      shortTitle: "Data & BI",
      category: t('services.items.bi.cat'),
      description: t('services.items.bi.desc'),
      icon: <FaChartLine />,
      fullDescription: t('services.items.bi.full'),
      features: t('services.items.bi.features', { returnObjects: true }),
      useCases: t('services.items.bi.cases')
    },
    {
      id: "data",
      title: t('services.items.data.title'),
      shortTitle: "Engineering",
      category: t('services.items.data.cat'),
      description: t('services.items.data.desc'),
      icon: <FaDatabase />,
      fullDescription: t('services.items.data.full'),
      features: t('services.items.data.features', { returnObjects: true }),
      useCases: t('services.items.data.cases')
    },
    {
      id: "ai_agents",
      title: t('services.items.ai_agents.title'),
      shortTitle: "AI Agents",
      category: t('services.items.ai_agents.cat'),
      description: t('services.items.ai_agents.desc'),
      icon: <FaRobot />,
      fullDescription: t('services.items.ai_agents.full'),
      features: t('services.items.ai_agents.features', { returnObjects: true }),
      useCases: t('services.items.ai_agents.cases')
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="ambient-glow"></div>
      
      <div className="services-container">
        <div className="services-header">
          <span className="badge-pill">{t('services.badge')}</span>
          <h2 className="services-title" dangerouslySetInnerHTML={{ __html: t('services.title') }}></h2>
          <p className="services-subtitle">{t('services.subtitle')}</p>
        </div>

        {loading ? (
          <div className="loading-orbit-skeleton">
             <div className="skeleton-circle"></div>
          </div>
        ) : (
          <>
            {/* ORBIT VIEW (Universel) */}
            <div className="orbit-wrapper">
              <div className={`orbit-center ${hoveredService ? 'active-hub' : ''}`}>
                <div className="orbit-center-core">
                  <span className="core-title">
                    {hoveredService ? hoveredService.shortTitle : "DigiScia"}
                  </span>
                  <span className="core-subtitle">
                    {hoveredService ? "Expertise" : "Hub"}
                  </span>
                </div>
                {/* Effet de scan laser en arrière-plan du hub */}
                <div className="hub-scanner"></div>
              </div>

              <div className="orbit-track">
                {servicesData.map((service, index) => (
                  <div key={service.id} className={`sat-wrapper sat-wrap-${index}`}>
                    <div 
                      className="orbit-satellite" 
                      onMouseEnter={() => setHoveredService(service)}
                      onMouseLeave={() => setHoveredService(null)}
                      onClick={() => setSelectedService(service)}
                    >
                      <div className="satellite-content">
                        <span className="service-cat">{service.category}</span>
                        <div className="service-icon-wrapper">
                          {service.icon}
                        </div>
                        <h3 className="sat-title">{service.title}</h3>
                        <p className="sat-desc">{service.description}</p>
                        <span className="service-link">
                          {t('services.explore')} <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {selectedService && (
        <ServiceDetailModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}

export default Services;