import React, { useState } from "react";
import "./Contact.css";
import SocialMediaLinks from "../components/SocialMedia/SocialMediaLinks.jsx";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    genre: 'Homme', // Valeur par défaut
    telephone: '',
    dob: '',
    subject: '',
    email: '',
    message: ''
  });
  
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
    setFormData({
      fullname: '',
      genre: 'Homme',
      telephone: '',
      dob: '',
      subject: '',
      email: '',
      message: ''
    });
    
    // Masquer le message après 5 secondes
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <section className="contact-section" id="contacts">
      <div className="contact-content">
        {/* Container des réseaux sociaux placé à gauche */}
        <div className="social-container">
          <h2 className="social-title">Suivez-nous</h2>
          <SocialMediaLinks />
        </div>
        
        {/* Container du formulaire */}
        <div className="contact-form-container">
          <h1 className="contact-title">Contactez-nous</h1>
          
          {showConfirmation && (
            <div className="confirmation-message">
              <div className="confirmation-icon">✓</div>
              <p>Merci de nous faire confiance! Notre équipe vous recontactera très bientôt!</p>
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <input 
                  type="text" 
                  id="fullname" 
                  name="fullname" 
                  placeholder="Nom/Prénom" 
                  value={formData.fullname}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <select
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                >
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  id="telephone" 
                  name="telephone" 
                  placeholder="Téléphone" 
                  value={formData.telephone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="date" 
                  id="dob" 
                  name="dob" 
                  placeholder="Date Naissance" 
                  value={formData.dob}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Objet" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Mail" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
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