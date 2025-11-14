import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import logoImage from "../assets/logobleu.jpg"; // Utilisation de votre logo original
import "./Home.css"; // Importation du CSS externe

// --- Composant TaglineRotator (Effet "Typing") ---
const TaglineRotator = memo(() => {
  const texts = [
    "Data Science",
    "Intelligence Artificielle",
    "Management de Données",
    "Automatisation",
    "Agents IA",
    "Analyse de Données & Aide a la decision",
    "Ingenierie de donnees",
    "Securite des donnees & Systemes",
    "Applications Web & Mobile"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseDelay = 2000;

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
    <span className="tagline-text">
      {currentText}
      <span className="typing-cursor" aria-hidden="true">_</span>
    </span>
  );
});

TaglineRotator.displayName = "TaglineRotator";

// --- Composant Home Principal ---
function Home() {
  const [nodes, setNodes] = useState([]);
  const canvasRef = useRef(null);

  // --- Logique du Canvas  ---
  useEffect(() => {
    const generateNodes = () => {
      const nodeCount = window.innerWidth < 768 ? 30 : 50;
      return Array.from({ length: nodeCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        size: Math.random() * 2 + 1
      }));
    };
    setNodes(generateNodes());
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let currentNodes = nodes;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      currentNodes = currentNodes.map(node => {
        let newX = node.x + node.vx;
        let newY = node.y + node.vy;
        if (newX < 0 || newX > 100) node.vx *= -1;
        if (newY < 0 || newY > 100) node.vy *= -1;
        return { ...node, x: newX, y: newY };
      });
      ctx.lineWidth = 0.5;
      currentNodes.forEach((node, i) => {
        currentNodes.slice(i + 1).forEach(otherNode => {
          const dx = (otherNode.x - node.x) * canvas.width / 100;
          const dy = (otherNode.y - node.y) * canvas.height / 100;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(91, 124, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(node.x * canvas.width / 100, node.y * canvas.height / 100);
            ctx.lineTo(otherNode.x * canvas.width / 100, otherNode.y * canvas.height / 100);
            ctx.stroke();
          }
        });
      });
      currentNodes.forEach(node => {
        ctx.fillStyle = 'rgba(91, 124, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(
          node.x * canvas.width / 100,
          node.y * canvas.height / 100,
          node.size,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    if (currentNodes.length > 0) {
      animate();
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [nodes]);

  // --- Handlers ---
  const handleSponsoringClick = useCallback(() => {
    window.open('https://wa.me/212716990681', '_blank');
  }, []);

  const handleContactClick = useCallback((e) => {
    e.preventDefault();
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // AJOUT : Logique de scroll vers le bas
  const handleScrollClick = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  return (
    <section id="home" className="home-container">
      {/* Fond Constellation */}
      <canvas 
        ref={canvasRef} 
        className="constellation-canvas"
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="gradient-overlay" aria-hidden="true" />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          
          {/* LOGO (GAUCHE) */}
          <div className="logo-container">
            <img 
              src={logoImage}
              alt="DigiScia Logo" 
              className="hero-logo"
            />
          </div>
          
          {/* TEXTE (DROITE) */}
          <div className="hero-text">
            <h1 className="welcome-text">Bienvenue sur</h1>
            <h2 className="brand-name">DigiScia</h2>
            <h3 className="tagline">
              <TaglineRotator />
            </h3>
            
            <div className="cta-buttons">
              <button 
                className="cta-button sponsoring" 
                onClick={handleSponsoringClick}
                aria-label="Ouvrir WhatsApp pour un partenariat"
              >
                Partenariat
              </button>
              <a 
                href="#contacts" 
                className="cta-button contact"
                onClick={handleContactClick}
                aria-label="Naviguer vers la section contact"
              >
                Nous Contacter
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* AJOUT : Indicateur de scroll (en bas) */}
      <div 
        className="scroll-indicator" 
        onClick={handleScrollClick}
        aria-label="Défiler vers le bas"
        role="button"
        tabIndex={0}
      >
        <span className="scroll-indicator-text">Scroll</span>
        <div className="scroll-indicator-icon"></div>
      </div>
    </section>
  );
}

export default Home;