import React, { useState, useRef } from "react";
import api from "../api";
import "./Contact.css"; 
import SocialMediaLinks from "../components/SocialMedia/SocialMediaLinks.jsx";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// État initial
const initialFormState = {
  telephone: '',
  subject: '',
  email: '',
  message: ''
};

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [formData, setFormData] = useState(initialFormState);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.telephone) newErrors.telephone = t('contact.validation.phone');
    if (!formData.email) newErrors.email = t('contact.validation.email');
    if (!formData.message) newErrors.message = t('contact.validation.message');
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowConfirmation(false);
      setSubmitError('');
      return;
    }
    
    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);
    setShowConfirmation(false);

    api.post('/api/v1/contact/', formData)
    .then((response) => {
        console.log('E-mail envoyé via backend!', response.data);
        setShowConfirmation(true);
        setFormData(initialFormState);
        setTimeout(() => setShowConfirmation(false), 5000);
    })
    .catch((error) => {
        console.error('Erreur d\'envoi backend:', error);
        const errorMsg = error.response?.data?.error || t('contact.error');
        setSubmitError(errorMsg);
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <section className="contact-section" id="contacts">
      
      {/* Texture de fond */}
      <div className="contact-glow"></div>
      
      <div className="contact-container">
        
        {/* En-tête de page */}
        <header className="contact-header">
          <span className="badge-pill">{t('contact.badge')}</span>
          <h1 className="contact-title-main">{t('contact.titleMain')}</h1>
          <p className="contact-subtitle-main">
            {t('contact.subtitleMain')}
          </p>
        </header>

        {/* Carte Principale Glassmorphism */}
        <div className="contact-content">
          
          {/* Colonne Gauche : Social & Infos */}
          <div className="social-container">
            <h2 className="social-title">{t('contact.socialTitle')}</h2>
            <p className="social-subtitle">
              {t('contact.socialSubtitle')}
            </p>
            <SocialMediaLinks />
          </div>
          
          {/* Colonne Droite : Formulaire */}
          <div className="contact-form-container">
            <h2 className="contact-title">{t('contact.formTitle')}</h2>
            
            {showConfirmation && (
              <div className="confirmation-message">
                <FaCheckCircle size={20} />
                <p>{t('contact.success')}</p>
              </div>
            )}

            {submitError && (
              <div className="error-message">
                <FaExclamationCircle size={20} />
                <p>{submitError}</p>
              </div>
            )}
            
            <form ref={form} className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">{t('contact.labels.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder={t('contact.placeholders.email')} 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* Téléphone */}
                <div className="form-group">
                  <label htmlFor="telephone">{t('contact.labels.phone')}</label>
                  <input 
                    type="tel" 
                    id="telephone" 
                    name="telephone"
                    placeholder={t('contact.placeholders.phone')} 
                    value={formData.telephone}
                    onChange={handleChange}
                    className={errors.telephone ? 'input-error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.telephone && <span className="error-text">{errors.telephone}</span>}
                </div>

                {/* Objet (Prend toute la largeur sur desktop) */}
                <div className="form-group grid-full">
                  <label htmlFor="subject">{t('contact.labels.subject')}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    placeholder={t('contact.placeholders.subject')} 
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message (Prend toute la largeur) */}
                <div className="form-group grid-full">
                  <label htmlFor="message">{t('contact.labels.message')}</label>
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder={t('contact.placeholders.message')} 
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                {/* Bouton Submit */}
                <div className="grid-full">
                  <button type="submit" className="contact-submit" disabled={isSubmitting}>
                    {isSubmitting ? t('contact.sending') : (
                      <>{t('contact.submit')} <FaPaperPlane style={{marginLeft: '10px'}} /></>
                    )}
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;