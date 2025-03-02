import React from "react";
import "./Contact.css";
import { FaLinkedin, FaInstagram, FaFacebook, FaGamepad } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contacts">
      <h1 className="contact-title">Contactez-nous</h1>
      <div className="contact-content">
        {/* Container des réseaux sociaux placé à gauche */}
        <div className="social-container">
          <h2 className="social-title">Suivez-nous</h2>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="icon linkedin" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="icon instagram" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="icon facebook" />
            </a>
            <a
              href="https://www.game.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gaming"
            >
              <FaGamepad className="icon game" />
            </a>
          </div>
        </div>
        {/* Container du formulaire */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullname">Nom complet</label>
                <input type="text" id="fullname" name="fullname" required />
              </div>
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select id="genre" name="genre" required>
                  <option value="">Sélectionner</option>
                  <option value="male">Homme</option>
                  <option value="female">Femme</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input type="tel" id="telephone" name="telephone" required />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date de Naissance</label>
                <input type="date" id="dob" name="dob" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Objet</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Mail</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
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