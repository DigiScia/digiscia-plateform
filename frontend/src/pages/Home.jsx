import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import logoImage from "../assets/logobleu.jpg";
import "./Home.css";

// --- Composant TaglineRotator ---
const TaglineRotator = memo(() => {
  const texts = [
    "Data Science",
    "Intelligence Artificielle",
    "Automatisation",
    "Business Intelligence",
    "Sécurité des Données",
    "Solutions Web & Mobile"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  // Vitesses ajustées pour un effet plus "pro"
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseDelay = 2500;

  useEffect(() => {
    const currentWord = texts[index];

    if (isDeleting) {
      if (subIndex > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, subIndex - 1));
          setSubIndex(subIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    } else {
      if (subIndex < currentWord.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, subIndex + 1));
          setSubIndex(subIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
        return () => clearTimeout(timer);
      }
    }
  }, [subIndex, isDeleting, index, texts]);

  return (
    <span className="tagline-container">
      {currentText}
      <span className="tagline-cursor" aria-hidden="true" />
    </span>
  );
});

TaglineRotator.displayName = "TaglineRotator";

// --- Composant Home Principal ---
function Home() {
  const canvasRef = useRef(null);

  // --- Animation Canvas (Particules subtiles) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Configuration
    let width, height;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Plus lent pour être plus élégant
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
        this.alpha = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      
      draw() {
        ctx.fillStyle = `rgba(148, 163, 184, ${this.alpha})`; // Couleur slate-400
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Dessiner les connexions
      particles.forEach((p, index) => {
        p.update();
        p.draw();
        
        // Lignes de connexion (plus subtiles)
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.1 * (1 - dist/150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', init);
    
    return () => window.removeEventListener('resize', init);
  }, []);

  const handleSponsoringClick = useCallback(() => {
    window.open('https://wa.me/212716990681', '_blank');
  }, []);

  const handleScrollClick = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  return (
    <section id="home" className="home-container">
      {/* Background Elements */}
      <canvas ref={canvasRef} className="constellation-canvas" />
      <div className="ambient-glow top-left" />
      <div className="ambient-glow bottom-right" />

      <div className="hero-section">
        
        {/* COLONNE GAUCHE : TEXTE */}
        <div className="hero-text-wrapper">
          {/* Badge Status */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">ESN & Centre d'Innovation</span>
          </div>

          <h1 className="brand-title">DigiScia</h1>
          
          <h2 className="hero-subtitle">
            Experts en <TaglineRotator />
          </h2>
          
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '90%' }}>
            Nous transformons vos données en leviers de croissance. Une approche sur-mesure pour propulser votre entreprise dans l'ère numérique.
          </p>

          <div className="cta-group">
            <button className="btn btn-primary" onClick={handleSponsoringClick}>
              <span>Démarrer un projet</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="#contacts" className="btn btn-secondary">
              Nous contacter
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : LOGO GLASS */}
        <div className="hero-visual-wrapper">
          <div className="logo-glass-card">
            <img 
              src={logoImage} 
              alt="Logo DigiScia" 
              className="hero-logo" 
            />
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-mouse" onClick={handleScrollClick} role="button" aria-label="Scroll down">
        <div className="scroll-wheel"></div>
      </div>
    </section>
  );
}

export default Home;