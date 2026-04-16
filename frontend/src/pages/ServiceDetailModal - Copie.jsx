import React, { useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FaTimes, FaCheck, FaArrowRight } from 'react-icons/fa';
import "./ServiceDetailModal.css"; 

const ServiceDetailModal = React.memo(({ service, onClose }) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);

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

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!service) return null;

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className="modal-content glass-effect" ref={modalRef}>
        
        <div className="modal-header">
          <div>
            <span className="modal-cat">{service.category}</span>
            <h3 className="modal-title">{service.title}</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Fermer"><FaTimes /></button>
        </div>
        
        <div className="modal-body">
          <p className="modal-intro">{service.fullDescription}</p>
          
          <h4 className="modal-subtitle">{t('services.modal.expertise')}</h4>
          <ul className="features-list">
            {service.features && service.features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <span className="check-icon"><FaCheck /></span> {feature}
              </li>
            ))}
          </ul>

          <h4 className="modal-subtitle">{t('services.modal.usecases')}</h4>
          <p className="modal-usecases">{service.useCases}</p>

          <div className="modal-call-to-action">
            <a href="#contacts" onClick={onClose} className="btn-modal-cta">
              {t('about.cta') || "Parlez-nous de votre projet"} <FaArrowRight />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
});

ServiceDetailModal.displayName = 'ServiceDetailModal';
export default ServiceDetailModal;