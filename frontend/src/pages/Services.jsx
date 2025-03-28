import React, { useMemo, useState, useEffect } from "react";
import "./Services.css";

// Composant pour l'image avec chargement progressif
const ProgressiveImage = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="service-image-container">
      <img 
        src={src}
        alt={alt}
        className={`service-card-image ${className || ''} ${imageLoaded ? 'loaded' : ''}`}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

// Placeholder pendant le chargement
const ServiceCardSkeleton = () => (
  <div className="service-card service-card-skeleton">
    <div className="skeleton-image"></div>
    <div className="skeleton-title"></div>
  </div>
);

function Services() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simuler un chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  // Définition des services
  const services = useMemo(() => [
    { title: "Web & Mobile", image: '/src/assets/services/dev.jpg', id: "dev" },
    { title: "Data Science & Intelligence Artificielle", image: '/src/assets/services/datascience.jpg', id: "datascience" },
    { title: "SIG & Webmapping", image: '/src/assets/services/webmapping.jpg', id: "webmapping" },
    { title: "Aide à la décision & Reporting", image: '/src/assets/services/businessintelligence.jpg', id: "reporting" },
    { title: "Big Data & Architecture Data", image: '/src/assets/services/bigdata.jpg', id: "bigdata" },
    { title: "Data Engineering & DevOps", image: '/src/assets/services/devops.jpg', id: "devops" },
    ], []);
  
  // Rendu mémorisé de la grille de services
  const serviceGrid = useMemo(() => (
    <div className="services-grid">
      {services.map((service, index) => (
        <div 
          className="service-card" 
          key={service.id}
          role="button"
          tabIndex="0"
          style={{ '--order': index }}
        >
          <ProgressiveImage 
            src={service.image} 
            alt={`Service ${service.title}`} 
          />
          <h3 className="service-card-title">{service.title}</h3>
        </div>
      ))}
    </div>
  ), [services]);
  
  return (
    <section className="services-section" id="services">
      <div className="background-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
      
      <div className="services-container">
        <h2 className="services-title">Nos Services</h2>
        <p className="services-subtitle">
          Des solutions technologiques adaptées à vos besoins
        </p>
        
        {isLoading ? (
          <div className="services-grid">
            {Array(6).fill(0).map((_, index) => (
              <ServiceCardSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        ) : (
          serviceGrid
        )}
      </div>
    </section>
  );
}

export default Services;