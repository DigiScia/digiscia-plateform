import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About us", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "News", id: "news" },
    { name: "Team", id: "team" },
    { name: "Contacts", id: "contacts" }
  ];

  return (
    <header className="header">
      <div className="logo">DigiScia</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={item.name} style={{ "--item-index": index }}>
              <a href={`#${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="theme-toggle">
        <button className="night-mode" onClick={toggleTheme}>
          <span className="moon-icon">{theme === "dark" ? "🌙" : "☀️"}</span>{" "}
          {theme === "dark" ? "NIGHT" : "DAY"}
        </button>
      </div>
    </header>
  );
}

export default Header;