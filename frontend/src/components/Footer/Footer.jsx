import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
   
  return (
    <footer className="footer-dark">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000066" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,202.7C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-logo">
          {/* <h2>DigiScia</h2> */}
          <div className="footer-logo-underline"></div>
        </div>

        <div className="footer-grid">
          <div className="footer-section">
            <h3>Notre Adresse</h3>
            <div className="footer-location">
              <FaMapMarkerAlt className="footer-icon" />
              <span>Ouagadougou, Burkina Faso</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Contactez-nous</h3>
            <div className="footer-contact-item">
              <FaPhone className="footer-icon" />
              <div className="footer-phones">
                <span>+212 716-990681</span>
                <span>+226 57 28 70 25</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-icon" />
              <span>infos.digiscia@gmail.com</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Suivez-nous</h3>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon facebook">
                <FaFacebook />
              </a>
              <a href="https://discord.gg/enKs5Pm8" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="social-icon discord">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-copyright">
          © DigiScia {currentYear} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;