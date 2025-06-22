import React, { useEffect, useRef, useCallback } from "react";
import "./ServiceDetailModal.css"; // L'importation du CSS doit être relative au même dossier

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const ServiceDetailModal = React.memo(({ service, onClose }) => {
  const modalRef = useRef(null);

  // Gérer la fermeture au clic en dehors et à l'échap
  const handleOverlayClick = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Empêcher le défilement du corps derrière le modal
    document.body.style.overflow = 'hidden';

    // Nettoyage
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!service) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" ref={modalRef}>
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Fermer les détails du service"
        >
          <CloseIcon />
        </button>

        <header className="modal-header">
          <div className="modal-icon">{service.icon}</div>
          <h2 id="modal-title" className="modal-title">{service.title}</h2>
          <p className="modal-subtitle">{service.description}</p>
        </header>

        <div className="modal-body">
          <p className="modal-full-description">{service.fullDescription}</p>

          {service.features && service.features.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Ce que nous offrons :</h3>
              <ul className="modal-feature-list">
                {service.features.map((feature, index) => (
                  <li key={index} className="modal-feature-item">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.useCases && (
            <div className="modal-section">
              <h3 className="modal-section-title">Cas d'utilisation courants :</h3>
              <p className="modal-use-cases">{service.useCases}</p>
            </div>
          )}

          {/* Vous pouvez ajouter d'autres sections ici, comme des témoignages, un appel à l'action, etc. */}
          <div className="modal-call-to-action">
            <p>Intéressé par ce service ?</p>
            <button className="modal-contact-button" onClick={() => alert('Fonctionnalité de contact à implémenter !')}>
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceDetailModal.displayName = 'ServiceDetailModal';

export default ServiceDetailModal;