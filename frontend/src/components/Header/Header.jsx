import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext.jsx";
import LanguageSelector from "../LanguageSelector";
import "./Header.css";

function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Initialisation du thème depuis localStorage (pour la synchronisation avec d'autres onglets)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme !== theme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, [theme]);

  // Gestion du scroll pour l'effet de fond
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle thème
  const handleToggleTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  // Navigation fluide (améliorée pour gérer le cross-page)
  const handleNavClick = useCallback((id) => {
    // Si on n'est pas sur la page d'accueil
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${id}`);
      setMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (window.innerWidth <= 900) {
        setMenuOpen(false);
      }
    }
  }, [location.pathname, navigate]);

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
    { name: t('header.careers', 'Carrières'), id: "careers" },
    { name: t('header.contact'), id: "contacts" }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* 1. Logo */}
      <a href="/" className="header-logo" onClick={(e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
          navigate("/");
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}>
        DigiScia
      </a>

      {/* 2. Menu de Navigation (Caché sur mobile) */}
      <nav
        className={`header-navbar ${menuOpen ? "active" : ""}`}
        ref={navRef}
        inert={(!menuOpen && window.innerWidth <= 900) ? true : undefined}
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
            onChange={handleToggleTheme}
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