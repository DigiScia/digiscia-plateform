import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css"; 
import SocialMediaLinks from "../components/SocialMedia/SocialMediaLinks.jsx";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

// État initial
const initialFormState = {
  telephone: '',
  subject: '',
  email: '',
  message: ''
};

function Contact() {
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
    if (!formData.telephone) newErrors.telephone = 'Le téléphone est requis';
    if (!formData.email) newErrors.email = 'L\'email est requis';
    if (!formData.message) newErrors.message = 'Un message est requis';
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

    emailjs.sendForm(
      'service_fcvhskh', 
      'template_wglutjo', 
      form.current,
      '7XluHeKjHpwQ_1CfB' 
    )
    .then((result) => {
        console.log('E-mail envoyé!', result.text);
        setShowConfirmation(true);
        setFormData(initialFormState);
        setTimeout(() => setShowConfirmation(false), 5000);
    }, (error) => {
        console.error('Erreur d\'envoi:', error.text);
        setSubmitError('Une erreur est survenue. Veuillez réessayer plus tard.');
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
          <span className="badge-pill">Contact & Support</span>
          <h1 className="contact-title-main">Parlons de votre projet</h1>
          <p className="contact-subtitle-main">
            Vous avez une vision ? Nous avons l'expertise technique pour la réaliser.
            Contactez notre équipe pour une consultation personnalisée.
          </p>
        </header>

        {/* Carte Principale Glassmorphism */}
        <div className="contact-content">
          
          {/* Colonne Gauche : Social & Infos */}
          <div className="social-container">
            <h2 className="social-title">Restons connectés</h2>
            <p className="social-subtitle">
              Suivez nos dernières actualités et rejoignez la communauté DigiScia sur les réseaux sociaux.
            </p>
            <SocialMediaLinks />
          </div>
          
          {/* Colonne Droite : Formulaire */}
          <div className="contact-form-container">
            <h2 className="contact-title">Envoyez-nous un message</h2>
            
            {showConfirmation && (
              <div className="confirmation-message">
                <FaCheckCircle size={20} />
                <p>Message envoyé ! Notre équipe vous recontactera très bientôt.</p>
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
                  <label htmlFor="email">Email Professionnel</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="ex: jean.dupont@entreprise.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* Téléphone */}
                <div className="form-group">
                  <label htmlFor="telephone">Téléphone</label>
                  <input 
                    type="tel" 
                    id="telephone" 
                    name="telephone"
                    placeholder="ex: +226 70 00 00 00" 
                    value={formData.telephone}
                    onChange={handleChange}
                    className={errors.telephone ? 'input-error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.telephone && <span className="error-text">{errors.telephone}</span>}
                </div>

                {/* Objet (Prend toute la largeur sur desktop) */}
                <div className="form-group grid-full">
                  <label htmlFor="subject">Objet de la demande</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    placeholder="ex: Demande de devis pour application mobile" 
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message (Prend toute la largeur) */}
                <div className="form-group grid-full">
                  <label htmlFor="message">Votre Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Détaillez votre besoin..." 
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
                    {isSubmitting ? 'Envoi en cours...' : (
                      <>Envoyer le message <FaPaperPlane style={{marginLeft: '10px'}} /></>
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