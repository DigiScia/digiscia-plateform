import React, { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";
import "./Header.css";

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false); // Pour l'effet au scroll
  const navRef = useRef(null);

  // Initialisation du thème
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Gestion du scroll pour l'effet de fond
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle thème
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  // Navigation fluide
  const handleNavClick = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (window.innerWidth <= 900) {
        setMenuOpen(false);
      }
    }
  }, []);

  // Fermeture au clic dehors
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
    { name: t('header.home'), id: "home" },
    { name: t('header.about'), id: "about" },
    { name: t('header.projects'), id: "projects" },
    { name: t('header.services'), id: "services" },
    { name: t('header.blog'), id: "news" },
    { name: t('header.team'), id: "team" },
    { name: t('header.contact'), id: "contacts" }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* 1. Logo */}
      <a href="#home" className="header-logo" onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>
        DigiScia
      </a>

      {/* 2. Menu de Navigation (Caché sur mobile) */}
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

      {/* 3. Actions (Toujours visibles : Thème + Langue + Burger) */}
      <div className="header-actions">
        
        {/* Toggle Thème */}
        <label className="switch" htmlFor="themeToggle" title="Changer de thème">
          <input
            id="themeToggle"
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
            aria-label="Basculer thème sombre/clair"
          />
          <span className="slider"></span>
        </label>

        {/* Sélecteur de Langue */}
        <LanguageSelector />

        {/* Menu Hamburger (Uniquement Mobile) */}
        <button
          className="header-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Ouvrir le menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;