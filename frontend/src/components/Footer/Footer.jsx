import React from "react";
import "./Footer.css"; 
// Vous pouvez remplacer ces SVGs par des icônes de react-icons pour alléger le code
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaDiscord } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
    { name: "Instagram", href: "https://www.instagram.com", icon: <FaInstagram /> },
    { name: "Facebook", href: "https://www.facebook.com", icon: <FaFacebookF /> },
    { name: "Discord", href: "https://discord.gg/enKs5Pm8", icon: <FaDiscord /> }
  ];

  const contactInfo = [
    {
      icon: <MdLocationOn size={20} />,
      text: "Ouagadougou, Burkina Faso",
      type: "location"
    },
    {
      icon: <MdPhone size={20} />,
      lines: ["+212 716-990681", "+226 57 28 70 25"],
      type: "phone"
    },
    {
      icon: <MdEmail size={20} />,
      text: "digiscia.infos@gmail.com",
      type: "email"
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* GRILLE PRINCIPALE */}
        <div className="footer-grid">
          
          {/* 1. Marque & Description */}
          <div className="footer-brand">
            <div className="footer-logo-container">
              {/* Logo simplifié ou texte stylisé */}
              <span className="footer-logo-text">DigiScia.</span>
            </div>
            <p className="footer-description">
              Excellence en solutions numériques. Nous transformons vos idées en réalité digitale avec une expertise de pointe en Data, IA et Développement.
            </p>
          </div>

          {/* 2. Coordonnées */}
          <div className="footer-section">
            <h3 className="footer-title">Nous contacter</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                {item.type === 'phone' ? (
                  <div className="phone-lines">
                    {item.lines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* 3. Réseaux Sociaux */}
          <div className="footer-section">
            <h3 className="footer-title">Suivez-nous</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* COPYRIGHT & LEGAL */}
        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} DigiScia. Tous droits réservés.
          </div>
          <div className="footer-links">
            <a href="#privacy" className="footer-link">Confidentialité</a>
            <a href="#terms" className="footer-link">Conditions</a>
            <a href="#legal" className="footer-link">Mentions légales</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;