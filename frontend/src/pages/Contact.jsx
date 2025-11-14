import React, { useState } from "react";
import "./Contact.css"; // Styles mis à jour
import SocialMediaLinks from "../components/SocialMedia/SocialMediaLinks.jsx";

// État initial (allégé)
const initialFormState = {
  telephone: '',
  subject: '',
  email: '',
  message: ''
};

// Message de confirmation
const ConfirmationMessage = () => (
  <div className="confirmation-message">
    <div className="confirmation-icon">✓</div>
    <p>Merci de nous faire confiance! Notre équipe vous recontactera très bientôt!</p>
  </div>
);

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };
  
  // Validation (allégée)
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
      return;
    }
    
    setErrors({});
    console.log('Form submitted:', formData);
    
    setShowConfirmation(true);
    setFormData(initialFormState);
    
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <section className="contact-section" id="contacts">
      <div className="contact-content">
        {/* Container des réseaux sociaux (Gauche) */}
        <div className="social-container">
          <h2 className="social-title">Suivez-nous</h2>
          <p className="social-subtitle">
            Rejoignez notre communauté et restez à l'affût de nos dernières actualités.
          </p>
          <SocialMediaLinks />
        </div>
        
        {/* Container du formulaire (Droite) */}
        <div className="contact-form-container">
          <h1 className="contact-title">Contactez-nous</h1>
          
          {showConfirmation && <ConfirmationMessage />}
          
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              
              {/* Ligne 1: Email (50%) + Téléphone (50%) */}
              <div className="form-group grid-col-span-3">
                <label htmlFor="email" className="sr-only">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email e.g john.dossy@gmail.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group grid-col-span-3">
                <label htmlFor="telephone" className="sr-only">Téléphone</label>
                <input 
                  type="tel" 
                  id="telephone" 
                  name="telephone" 
                  placeholder="Téléphone e.g +226******* " 
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className={errors.telephone ? 'input-error' : ''}
                />
                {errors.telephone && <span className="error-text">{errors.telephone}</span>}
              </div>

              {/* Ligne 2: Objet (100%) */}
              <div className="form-group grid-col-span-6">
                <label htmlFor="subject" className="sr-only">Objet</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Objet" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Ligne 3: Message (100%) */}
              <div className="form-group grid-col-span-6">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Ecrivez votre Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={errors.message ? 'input-error' : ''}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              {/* Ligne 4: Bouton */}
              <div className="form-group-submit grid-col-span-6">
                <button type="submit" className="contact-submit">
                  Envoyer
                </button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;