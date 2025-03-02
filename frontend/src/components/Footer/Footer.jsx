import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaFacebook, FaGamepad, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
    
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-container">
          <p className="location">
            <FaMapMarkerAlt /> Ouagadougou, Burkina Faso
          </p>
          <p className="contact">
            <FaPhone /> +212 716990681 | <FaEnvelope /> <a href="mailto:infos.digiscia@gmail.com">infos.digiscia@gmail.com</a>
          </p>
        </div>
        
        <div className="social-container">
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="icon facebook" />
            </a>
            <a href="https://www.game.com" target="_blank" rel="noopener noreferrer" aria-label="Gaming">
              <FaGamepad className="icon game" />
            </a>
          </div>
        </div>
        
        <p className="copyright">© <span>DigiScia</span> {currentYear} <span>|</span> All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;