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
    { title: "Web & Mobile", image: '/src/assets/web_mobile.jpg', id: "web-mobile" },
    { title: "Intelligence Artificielle", image: '/src/assets/ia.jpg', id: "ai" },
    { title: "SIG", image: '/src/assets/sig.jpg', id: "sig" },
    { title: "Aide à la décision", image: '/src/assets/bi.jpg', id: "bi" },
    { title: "Data Science", image: '/src/assets/bigdata.jpg', id: "bigdata" },
    { title: "Audit des SI", image: '/src/assets/audit.jpg', id: "audit" },
    { title: "Robotique", image: '/src/assets/robotics.jpg', id: "robotics" },
    { title: "Formation", image: '/src/assets/formation.jpg', id: "formation" }
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