import React, { useEffect, useState, useRef } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ isVisible, onFinished }) => {
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

        {/* Logo mark + wordmark */}
        <div className="splash-brand">
          <div className="splash-mark-wrap">
            <div className="splash-mark-glow" />
            <div className="splash-mark">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="56" height="56" rx="13" fill="white" />
                <path
                  d="M28.5 14C21.044 14 15 20.044 15 27.5C15 34.956 21.044 41 28.5 41H38V34.5H28.5C24.634 34.5 21.5 31.366 21.5 27.5C21.5 23.634 24.634 20.5 28.5 20.5C32.366 20.5 35.5 23.634 35.5 27.5V29H42V27.5C42 20.044 35.956 14 28.5 14Z"
                  fill="#00093D"
                />
              </svg>
            </div>
          </div>

          <div className="splash-wordmark">
            <span className="splash-word-digi">Digi</span><span className="splash-word-scia">Scia</span>
          </div>
        </div>

        {/* Separator */}
        <div className="splash-sep">
          <div className="splash-sep-line" />
          <div className="splash-sep-pip" />
          <div className="splash-sep-line" />
        </div>

        {/* Tagline */}
        <p className="splash-tagline" aria-label="Votre Partenaire de Performance Digitale">
          {"Votre Partenaire de Performance Digitale".split('').map((char, i) => (
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