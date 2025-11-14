import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import logoImage from "../assets/logobleu.jpg"; // Utilisation de votre logo original
import "./Home.css"; // Importation du CSS externe

// --- Composant TaglineRotator (de votre fichier original) ---
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeIn(false);
    }, 2500);

    const rotationTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setFadeIn(true);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(rotationTimer);
    };
  }, [currentIndex, texts.length]);

  return (
    <span className={`tagline-text ${fadeIn ? 'fade-in' : 'fade-out'}`}>
      {texts[currentIndex]}
    </span>
  );
});

TaglineRotator.displayName = "TaglineRotator";

// --- Composant Home Principal ---
function Home() {
  const [nodes, setNodes] = useState([]);
  const canvasRef = useRef(null);

  // --- Logique du Canvas (de votre nouveau fichier) ---
  // Générer les nœuds de la constellation
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

  // Animation canvas pour les connexions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let currentNodes = nodes; // Utiliser les nœuds de l'état

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Mettre à jour positions
      currentNodes = currentNodes.map(node => {
        let newX = node.x + node.vx;
        let newY = node.y + node.vy;
        
        // S'assurer que les nœuds restent dans le viewport
        if (newX < 0 || newX > 100) node.vx *= -1;
        if (newY < 0 || newY > 100) node.vy *= -1;
        
        return { ...node, x: newX, y: newY };
      });

      // Dessiner connexions
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

      // Dessiner nœuds
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

    // Lancer l'animation uniquement si on a des nœuds
    if (currentNodes.length > 0) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [nodes]); // Dépend de l'état 'nodes'

  // --- Handlers (de votre fichier original) ---
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

  const handleScrollClick = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  return (
    <section id="home" className="home-container">
      {/* Fond Constellation (Nouveau) */}
      <canvas 
        ref={canvasRef} 
        className="constellation-canvas"
        aria-hidden="true"
      />
      {/* Overlay (Nouveau) */}
      <div className="gradient-overlay" aria-hidden="true" />

      {/* Hero Section (Basé sur l'original) */}
      <div className="hero-section">
        <div className="hero-content">
          
          {/* Logo (Original) */}
          <div className="logo-container">
            <img 
              src={logoImage}
              alt="DigiScia Logo" 
              className="hero-logo"
            />
          </div>
          
          {/* Texte (Original) */}
          <div className="hero-text">
            <h1 className="welcome-text">Bienvenue sur</h1>
            <h2 className="brand-name">DigiScia</h2>
            <h3 className="tagline">
              <TaglineRotator />
            </h3>
            
            {/* Boutons (Original) */}
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

      {/* Scroll Indicator (Original) */}
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