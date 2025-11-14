import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const navRef = useRef(null);

  // Effet pour initialiser le thème
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle de thème
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  // Gestionnaire pour fermer le menu sur écran mobile après navigation
  const handleNavClick = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Fermer le menu seulement sur mobile
      if (window.innerWidth <= 900) {
        setMenuOpen(false);
      }
    }
  }, []);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target) && 
          !event.target.closest('.header-menu-toggle')) {
        setMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Accueil", id: "home" },
    { name: "A Propos", id: "about" },
    { name: "Projets", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Blog", id: "news" },
    { name: "Equipe", id: "team" },
    { name: "Nous Contacter", id: "contacts" } // Le CSS s'occupe de le styler en CTA
  ];

  return (
    <header className="header">
      <div className="header-logo">DigiScia</div>

        <button
          className="header-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      <nav 
        className={`header-navbar ${menuOpen ? "active" : ""}`}
        ref={navRef}
        aria-hidden={!menuOpen && window.innerWidth <= 900}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-theme-toggle">
        <label className="switch" htmlFor="themeToggle">
          {/* J'ai supprimé les SVGs pour un look minimaliste */}
          <input 
            id="themeToggle"
            type="checkbox" 
            className="input" 
            checked={theme === "light"}
            onChange={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;