import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';
import logoBlanc from '../../assets/logoblanc.jpg';
import logoBleu from '../../assets/logobleu.jpg';
import './SplashScreen.css';

const SplashScreen = ({ isVisible, onFinished }) => {
  const { theme } = useTheme();
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [phase, setPhase] = useState('idle'); // idle | entering | active | exiting
  const timerRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        setTimeout(() => setPhase('entering'), 20);
        setTimeout(() => setPhase('active'), 600);
      });
    } else {
      setPhase('exiting');
      timerRef.current = setTimeout(() => {
        setShouldRender(false);
        setPhase('idle');
        if (onFinished) onFinished();
      }, 900);
    }
    return () => clearTimeout(timerRef.current);
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div className={`splash-screen splash--${phase}`} aria-live="polite" role="status">

      {/* Ambient background layers */}
      <div className="splash-bg-orb splash-bg-orb--1" />
      <div className="splash-bg-orb splash-bg-orb--2" />
      <div className="splash-bg-orb splash-bg-orb--3" />
      <div className="splash-bg-grid" />
      <div className="splash-bg-noise" />

      {/* Main content */}
      <div className="splash-content">

        {/* Logo Image */}
        <div className="splash-brand">
          <div className="splash-logo-wrap">
            <img 
              src={theme === 'light' ? logoBlanc : logoBleu} 
              alt="DigiScia Logo" 
              className="splash-logo-img" 
            />
          </div>
        </div>

        {/* Separator */}
        <div className="splash-sep">
          <div className="splash-sep-line" />
          <div className="splash-sep-pip" />
          <div className="splash-sep-line" />
        </div>

        {/* Tagline */}
        <p className="splash-tagline" aria-label="Votre partenaire de performance digitale">
          {"votre partenaire de performance digitale".split('').map((char, i) => (
            <span
              key={i}
              className="splash-char"
              style={{ '--i': i }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>

        {/* Loader */}
        <div className="splash-loader" role="progressbar" aria-label="Chargement en cours">
          <div className="splash-loader-track">
            <div className="splash-loader-beam" />
          </div>
          <div className="splash-loader-dots">
            {[0, 1, 2].map(i => (
              <span key={i} className="splash-dot" style={{ '--di': i }} />
            ))}
          </div>
        </div>

      </div>

      {/* Corner brackets */}
      <div className="splash-bracket splash-bracket--tl" />
      <div className="splash-bracket splash-bracket--tr" />
      <div className="splash-bracket splash-bracket--bl" />
      <div className="splash-bracket splash-bracket--br" />

      {/* Footer */}
      <footer className="splash-footer">
        <span>digiscia.com</span>
      </footer>
    </div>
  );
};

export default SplashScreen;