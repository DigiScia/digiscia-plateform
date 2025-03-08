import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
    
  return (
    <footer className="footer-dark">
      <div className="footer-content">
        <div className="footer-location">Ouagadougou, Burkina Faso</div>
        
        <div className="footer-contact">
          <div className="footer-phone">+212 716990681</div>
          <div className="footer-email">infos.digiscia@gmail.com</div>
        </div>
        
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
        
        <div className="footer-copyright">
          © DigiScia {currentYear} All Right reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;