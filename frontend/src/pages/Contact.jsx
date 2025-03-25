import React, { useState } from "react";
import "./Contact.css";
import SocialMediaLinks from "../components/SocialMedia/SocialMediaLinks.jsx";

const initialFormState = {
  fullname: '',
  genre: 'Homme',
  telephone: '',
  dob: '',
  subject: '',
  email: '',
  message: ''
};

const ConfirmationMessage = () => (
  <div className="confirmation-message">
    <div className="confirmation-icon">✓</div>
    <p>Merci de nous faire confiance! Notre équipe vous recontactera très bientôt!</p>
  </div>
);

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Form submitted:', formData);
    // Vous pouvez ajouter ici l'envoi des données à votre backend
    
    // Affichage du message de confirmation
    setShowConfirmation(true);
    
    // Réinitialisation du formulaire
    setFormData(initialFormState);
    
    // Masquer le message après 5 secondes
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  const formFields = [
    { id: 'fullname', type: 'text', placeholder: 'Nom/Prénom', required: true },
    { 
      id: 'genre', 
      type: 'select', 
      options: [
        { value: 'Homme', label: 'Homme' },
        { value: 'Femme', label: 'Femme' },
        { value: 'Autre', label: 'Autre' }
      ],
      required: true 
    },
    { id: 'telephone', type: 'tel', placeholder: 'Téléphone', required: true },
    { id: 'dob', type: 'date', placeholder: 'Date Naissance', required: true },
    { id: 'subject', type: 'text', placeholder: 'Objet', required: true },
    { id: 'email', type: 'email', placeholder: 'Mail', required: true }
  ];

  return (
    <section className="contact-section" id="contacts">
      <div className="contact-content">
        {/* Container des réseaux sociaux */}
        <div className="social-container">
          <h2 className="social-title">Suivez-nous</h2>
          <SocialMediaLinks />
        </div>
        
        {/* Container du formulaire */}
        <div className="contact-form-container">
          <h1 className="contact-title">Contactez-nous</h1>
          
          {showConfirmation && <ConfirmationMessage />}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {formFields.map(field => (
                <div className="form-group" key={field.id}>
                  {field.type === 'select' ? (
                    <select
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required={field.required}
                    >
                      {field.options.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input 
                      type={field.type} 
                      id={field.id} 
                      name={field.id} 
                      placeholder={field.placeholder} 
                      value={formData[field.id]}
                      onChange={handleChange}
                      required={field.required} 
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="form-group full-width">
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;