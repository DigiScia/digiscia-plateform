import React, { useState, useEffect, useRef } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fetchNews from "../services/newsService.js"; 
import LoadingWrapper from '../components/SplashScreen/LoadingWrapper.jsx';
import SplashScreen from '../components/SplashScreen/SplashScreen.jsx';

// --- Composant de l'animation de chargement sophistiquée ---
function LoadingAnimation() {
  const { t } = useTranslation();
  return (
    <>
      <style>{`
        .la-loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(3rem, 8vh, 6rem) clamp(1rem, 4vw, 2rem);
          min-height: 400px;
          position: relative;
          width: 100%; /* S'assure qu'il prend toute la largeur du carrousel */
        }

        /* Particle Background */
        .la-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .la-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda, #5B7CFF);
          border-radius: 50%;
          opacity: 0;
          animation: la-float-up 3s ease-in-out infinite;
        }

        .la-particle:nth-child(1) { left: 10%; animation-delay: 0s; }
        .la-particle:nth-child(2) { left: 20%; animation-delay: 0.5s; }
        .la-particle:nth-child(3) { left: 30%; animation-delay: 1s; }
        .la-particle:nth-child(4) { left: 40%; animation-delay: 1.5s; }
        .la-particle:nth-child(5) { left: 50%; animation-delay: 2s; }
        .la-particle:nth-child(6) { left: 60%; animation-delay: 0.7s; }
        .la-particle:nth-child(7) { left: 70%; animation-delay: 1.2s; }
        .la-particle:nth-child(8) { left: 80%; animation-delay: 1.8s; }
        .la-particle:nth-child(9) { left: 90%; animation-delay: 0.3s; }

        @keyframes la-float-up {
          0% {
            bottom: -10px;
            opacity: 0;
            transform: translateX(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(20px) scale(1.2);
          }
          100% {
            bottom: 100%;
            opacity: 0;
            transform: translateX(-10px) scale(0.8);
          }
        }

        /* Main Spinner Container */
        .la-spinner-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: clamp(2rem, 5vh, 3rem);
          z-index: 1;
        }

        /* Outer Ring with Glow */
        .la-spinner-outer {
          position: absolute;
          width: clamp(80px, 15vw, 120px);
          height: clamp(80px, 15vw, 120px);
          border: 2px solid rgba(91, 124, 255, 0.1);
          border-radius: 50%;
          animation: la-pulse-ring 2s ease-in-out infinite;
        }

        @keyframes la-pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }

        /* Middle Ring - Rotating */
        .la-spinner-middle {
          position: absolute;
          width: clamp(60px, 12vw, 90px);
          height: clamp(60px, 12vw, 90px);
          border: 3px solid transparent;
          border-top-color: #64ffda;
          border-right-color: #64ffda;
          border-radius: 50%;
          animation: la-spin-reverse 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }

        @keyframes la-spin-reverse {
          to { transform: rotate(-360deg); }
        }

        /* Main Spinner */
        .la-spinner {
          width: clamp(40px, 8vw, 60px);
          height: clamp(40px, 8vw, 60px);
          border: 4px solid rgba(91, 124, 255, 0.15);
          border-radius: 50%;
          border-top-color: #5B7CFF;
          border-right-color: #5B7CFF;
          animation: la-spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          position: relative;
          box-shadow: 
            0 0 20px rgba(91, 124, 255, 0.3),
            inset 0 0 20px rgba(91, 124, 255, 0.1);
        }

        @keyframes la-spin {
          to { transform: rotate(360deg); }
        }

        /* Center Dot */
        .la-spinner::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #5B7CFF, #64ffda);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: la-pulse-dot 1s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(91, 124, 255, 0.8);
        }

        @keyframes la-pulse-dot {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.6;
          }
        }

        /* Content Area */
        .la-loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.75rem, 2vh, 1.25rem);
          z-index: 1;
        }

        /* Loading Text with Gradient */
        .la-loading-text {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 600;
          background: linear-gradient(135deg, #5B7CFF, #64ffda);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: la-shimmer 2s ease-in-out infinite;
          background-size: 200% 200%;
          letter-spacing: 0.5px;
        }

        @keyframes la-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Subtext */
        .la-loading-subtext {
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: #B8C5E0;
          opacity: 0;
          animation: la-fade-in-up 0.6s ease-out 0.3s forwards;
        }

        @keyframes la-fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        /* Progress Dots */
        .la-progress-dots {
          display: flex;
          gap: 8px;
          margin-top: clamp(0.5rem, 2vh, 1rem);
        }

        .la-dot {
          width: 8px;
          height: 8px;
          background: #5B7CFF;
          border-radius: 50%;
          animation: la-bounce 1.4s ease-in-out infinite;
          opacity: 0.4;
        }

        .la-dot:nth-child(1) { animation-delay: 0s; }
        .la-dot:nth-child(2) { animation-delay: 0.2s; }
        .la-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes la-bounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        /* Info Cards - Animated Tips */
        .la-loading-tips {
          margin-top: clamp(2rem, 5vh, 3rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 2vh, 1rem);
          max-width: 600px;
          width: 100%;
          opacity: 0;
          animation: la-fade-in-up 0.8s ease-out 0.6s forwards;
        }

        .la-tip-card {
          background: rgba(91, 124, 255, 0.05);
          border: 1px solid rgba(91, 124, 255, 0.15);
          border-radius: 12px;
          padding: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem);
          display: flex;
          align-items: center;
          gap: clamp(0.75rem, 2vw, 1rem);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .la-tip-card:hover {
          background: rgba(91, 124, 255, 0.08);
          border-color: rgba(91, 124, 255, 0.3);
          transform: translateX(4px);
        }

        .la-tip-icon {
          width: clamp(32px, 6vw, 40px);
          height: clamp(32px, 6vw, 40px);
          background: linear-gradient(135deg, #5B7CFF, #64ffda);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
          font-size: clamp(1rem, 3vw, 1.25rem);
          box-shadow: 0 4px 12px rgba(91, 124, 255, 0.3);
        }

        .la-tip-text {
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: #B8C5E0;
          line-height: 1.5;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .la-loading-tips {
            margin-top: clamp(1.5rem, 4vh, 2rem);
          }
          .la-particles {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .la-spinner,
          .la-spinner-middle,
          .la-spinner-outer,
          .la-particle,
          .la-dot {
            animation: none !important;
          }
          .la-spinner {
            opacity: 0.8;
          }
        }
      `}</style>

      <div className="la-loading-container">
        {/* Particle Background */}
        <div className="la-particles">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="la-particle"></div>
          ))}
        </div>

        {/* Spinner */}
        <div className="la-spinner-wrapper">
          <div className="la-spinner-outer"></div>
          <div className="la-spinner-middle"></div>
          <div className="la-spinner"></div>
        </div>

        {/* Loading Content */}
        <div className="la-loading-content">
          <div className="la-loading-text">{t('news.loading')}</div>
          <div className="la-loading-subtext">{t('news.loadingSubtext')}</div>
          
          <div className="la-progress-dots">
            <div className="la-dot"></div>
            <div className="la-dot"></div>
            <div className="la-dot"></div>
          </div>
        </div>

        {/* Loading Tips (parfait pour une ESN) */}
        <div className="la-loading-tips">
          <div className="la-tip-card">
            <div className="la-tip-icon">📰</div>
            <div className="la-tip-text">
              {t('news.loadingTips.tip1')}
            </div>
          </div>
          <div className="la-tip-card">
            <div className="la-tip-icon">🚀</div>
            <div className="la-tip-text">
              {t('news.loadingTips.tip2')}
            </div>
          </div>
          <div className="la-tip-card">
            <div className="la-tip-icon">💡</div>
            <div className="la-tip-text">
              {t('news.loadingTips.tip3')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// --- Composant News (utilise LoadingAnimation) ---

const newsStyles = `


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-primary);
  color: #FFFFFF;
  overflow-x: hidden;
}

.news-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: var(--bg-primary);
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
}

/* Fond animé */
.news-section::before {
  content: '';
  position: fixed;
  top: -30%;
  left: -20%;
  width: 140vw;
  height: 140vh;
  background: radial-gradient(circle at center, rgba(91, 124, 255, 0.08) 0%, transparent 75%);
  animation: float 25s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
  filter: blur(120px);
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, -20px) scale(1.05); }
}

.grid-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

.news-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.news-header {
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.news-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(91, 124, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 124, 255, 0.3);
  padding: clamp(0.5rem, 1.5vw, 0.65rem) clamp(1rem, 2.5vw, 1.25rem);
  border-radius: 50px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 500;
  color: #B8C5E0;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.news-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.news-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #B8C5E0;
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Carousel */
.carousel-wrapper {
  position: relative;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.news-carousel {
  display: flex;
  gap: clamp(1.5rem, 3vw, 2rem);
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: clamp(1rem, 2vw, 1.5rem) 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(91, 124, 255, 0.3) transparent;
  -webkit-overflow-scrolling: touch;
}

.news-carousel::-webkit-scrollbar {
  height: 6px;
}

.news-carousel::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.news-carousel::-webkit-scrollbar-thumb {
  background: rgba(91, 124, 255, 0.5);
  border-radius: 3px;
}

.news-carousel::-webkit-scrollbar-thumb:hover {
  background: rgba(91, 124, 255, 0.7);
}

/* Boutons de navigation */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  background: rgba(91, 124, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 124, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: #FFFFFF;
  font-size: clamp(1rem, 2vw, 1.2rem);
  transition: all 0.3s ease;
}

.carousel-nav:hover {
  background: rgba(91, 124, 255, 0.4);
  border-color: #5B7CFF;
  transform: translateY(-50%) scale(1.1);
}

.carousel-prev { left: clamp(-15px, -2vw, -25px); }
.carousel-next { right: clamp(-15px, -2vw, -25px); }

/* Carte d'actualité */
.news-card {
  flex: 0 0 clamp(280px, 40vw, 350px);
  scroll-snap-align: start;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 20px 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
}

.news-image-container {
  position: relative;
  width: 100%;
  height: clamp(180px, 25vw, 220px);
  overflow: hidden;
  background: rgba(91, 124, 255, 0.1);
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.news-card:hover .news-image {
  transform: scale(1.08);
}

.news-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 9, 61, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.news-card:hover .news-overlay {
  opacity: 1;
}

.read-more-btn {
  padding: clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.5rem, 3vw, 2rem);
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
}

.read-more-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(91, 124, 255, 0.5);
}

.news-content {
  padding: clamp(1.25rem, 2.5vw, 1.75rem);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-date {
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  color: #7A8AB5;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.date-icon {
  width: 16px;
  height: 16px;
  color: #5B7CFF;
}

.news-card-title {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  line-height: 1.4;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Newsletter */
.newsletter-section {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3rem);
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
}

.newsletter-description {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: #B8C5E0;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  flex-wrap: wrap;
  justify-content: center;
}

.newsletter-input {
  flex: 1;
  min-width: 250px;
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.5rem);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: #FFFFFF;
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: #7A8AB5;
}

.newsletter-input:focus {
  outline: none;
  border-color: #5B7CFF;
  background: rgba(255, 255, 255, 0.08);
}

.newsletter-btn {
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.95rem, 2vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.newsletter-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(91, 124, 255, 0.4);
}

.thank-you-message {
  padding: clamp(1rem, 2vw, 1.5rem);
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 16px;
  color: #81C784;
  font-size: clamp(1rem, 2vw, 1.1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  color: #F87171;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(3rem, 6vw, 5rem);
  text-align: center;
  width: 100%;
}

.loading-text {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #B8C5E0;
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-nav {
    display: none;
  }
  
  .news-card {
    flex: 0 0 clamp(260px, 70vw, 300px);
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-input {
    min-width: 100%;
  }
}

@media (max-width: 480px) {
  .news-section {
    padding: clamp(2rem, 5vw, 3rem) clamp(0.75rem, 3vw, 1rem);
  }
  
  .news-card {
    flex: 0 0 clamp(240px, 85vw, 280px);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* === LIGHT MODE (data-theme="light") === */
[data-theme="light"] body {
  background: #FFFFFF;
  color: #00093D;
}

[data-theme="light"] .news-section {
  background: #FFFFFF;
}

[data-theme="light"] .news-section::before {
  background: radial-gradient(circle, rgba(0, 9, 61, 0.12) 0%, transparent 70%);
}

[data-theme="light"] .grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 9, 61, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 9, 61, 0.3) 1px, transparent 1px);
}

[data-theme="light"] .news-badge {
  background: rgba(0, 9, 61, 0.1);
  border-color: rgba(0, 9, 61, 0.3);
  color: #5B7CFF;
}

[data-theme="light"] .news-title {
  color: #00093D;
}

[data-theme="light"] .news-subtitle {
  color: #5B7CFF;
}

[data-theme="light"] .news-carousel::-webkit-scrollbar-track {
  background: rgba(0, 9, 61, 0.05);
}

[data-theme="light"] .news-carousel::-webkit-scrollbar-thumb {
  background: rgba(0, 9, 61, 0.3);
}

[data-theme="light"] .news-carousel::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 9, 61, 0.5);
}

[data-theme="light"] .carousel-nav {
  background: rgba(0, 9, 61, 0.2);
  border-color: rgba(0, 9, 61, 0.3);
  color: #00093D;
}

[data-theme="light"] .carousel-nav:hover {
  background: rgba(0, 9, 61, 0.4);
  border-color: #5B7CFF;
}

[data-theme="light"] .news-card {
  background: rgba(0, 9, 61, 0.03);
  border-color: rgba(0, 9, 61, 0.08);
}

[data-theme="light"] .news-card:hover {
  border-color: rgba(0, 9, 61, 0.3);
  box-shadow: 0 20px 60px rgba(0, 9, 61, 0.15);
  background: rgba(0, 9, 61, 0.05);
}

[data-theme="light"] .news-image-container {
  background: rgba(0, 9, 61, 0.1);
}

[data-theme="light"] .read-more-btn {
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
}

[data-theme="light"] .news-date {
  color: #7A8AB5;
}

[data-theme="light"] .date-icon {
  color: #5B7CFF;
}

[data-theme="light"] .news-card-title {
  color: #00093D;
}

[data-theme="light"] .news-card-description {
  color: rgba(0, 9, 61, 0.7);
}

[data-theme="light"] .newsletter-section {
  background: rgba(0, 9, 61, 0.02);
}

[data-theme="light"] .newsletter-title {
  color: #00093D;
}

[data-theme="light"] .newsletter-subtitle {
  color: rgba(0, 9, 61, 0.7);
}

[data-theme="light"] .newsletter-input {
  background: rgba(0, 9, 61, 0.05);
  border-color: rgba(0, 9, 61, 0.1);
  color: #00093D;
}

[data-theme="light"] .newsletter-input::placeholder {
  color: rgba(0, 9, 61, 0.5);
}

[data-theme="light"] .newsletter-button {
  background: linear-gradient(135deg, #5B7CFF 0%, #8BA3FF 100%);
  color: #FFFFFF;
}
`;


const CalendarIcon = () => (
  <svg className="date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

function News() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Mis à true par défaut
  const carouselRef = useRef(null);
  const navigate = useNavigate(); // Ajout de useNavigate

  
  // 1. Récupération des données réelles avec délai minimum de 3s
  useEffect(() => {
    async function getNews() {
      setIsLoading(true); // Commencer le chargement

      try {
        // On lance les deux promesses en parallèle :
        // 1. La récupération des news
        const fetchPromise = fetchNews();
        // 2. Un timer de 3000ms (3 secondes)
        const timerPromise = new Promise(resolve => setTimeout(resolve, 3000));

        // Promise.all attend que les DEUX soient finies
        // On récupère uniquement le résultat de la première promesse (data)
        const [data] = await Promise.all([fetchPromise, timerPromise]);

        if (Array.isArray(data)) {
          setNewsData(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else {
          console.error("fetchNews() n'a pas retourné un tableau :", data);
          setNewsData([]); // Assurer que c'est un tableau
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
        setNewsData([]); // Mettre à vide en cas d'erreur
      } finally {
        setIsLoading(false); // S'exécutera seulement après 3s minimum
      }
    }
    getNews();
  }, []);

  // 2. Logique d'inscription à la Newsletter (de Fichier 2)
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage('');
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();
    try {
      await api.post("/api/v1/suscribers/create/", { email });
      setShowThankYou(true);
      setEmail('');
      setErrorMessage('');
    } catch (error) {
      console.error("Erreur lors de l'inscription à la newsletter :", error);
      if (error.response && error.response.data) {
        if (error.response.data.email && Array.isArray(error.response.data.email)) {
          setErrorMessage(t('news.newsletter.alreadySubscribed')); 
        } else {
          setErrorMessage(t('news.newsletter.errorGeneric'));
        }
      } else if (error.request) {
        setErrorMessage(t('news.newsletter.errorServer'));
      } else {
        setErrorMessage(t('news.newsletter.errorGeneric'));
      }
    }
  };

  const scrollCarousel = (direction) => {
    // Utilisation de la valeur de défilement du Fichier 1 (plus grande)
    const scrollAmount = direction === 'left' ? -350 : 350;
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  };

  const handleReadArticle = (news) => {
    const slug = createSlug(news.title);
    localStorage.setItem('currentArticle', JSON.stringify(news));
    navigate(`/article/${news.id}/${slug}`);
    window.scrollTo(0, 0);
  };

  // 4. Formatage de la date (utilisant les locales i18next)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
       console.error("Erreur formatage date:", error, dateString);
       return t('article.error');
    }
  };

  // **RENDU JSX (Basé sur le Fichier 1 pour le design)**
  return (
    <>
      <style>{newsStyles}</style>
      <section className="news-section" id="news">
        <div className="grid-pattern" aria-hidden="true"></div>
        
        <div className="news-container">
          <header className="news-header">
            <div className="news-badge">
              📰 {t('news.badge')}
            </div>
            <h2 className="news-title">{t('news.title')}</h2>
            <p className="news-subtitle">
              {t('news.subtitle')}
            </p>
          </header>

          <div className="carousel-wrapper">
            <button 
              className="carousel-nav carousel-prev" 
              onClick={() => scrollCarousel('left')}
              aria-label="Article précédent"
            >
              ‹
            </button>
            
            <LoadingWrapper isLoading={isLoading} minDuration={1200}>
              <div className="news-carousel" ref={carouselRef}>
                {newsData.length > 0 ? (
                  newsData.map((news) => (
                    <article key={news.id} className="news-card">
                      <div className="news-image-container">
                        <img 
                          src={news.image} 
                          alt={news.title} 
                          className="news-image"
                          loading="lazy"
                          // Ajout du fallback de Fichier 2
                          onError={(e) => { e.target.src = "/images/placeholder.jpg"; }}
                        />
                        <div className="news-overlay">
                          <button 
                            className="read-more-btn"
                            aria-label={`Lire: ${news.title}`}
                            // Ajout de l'action de Fichier 2
                            onClick={() => handleReadArticle(news)} 
                          >
                            {t('news.readArticle')}
                          </button>
                        </div>
                      </div>
                      <div className="news-content">
                        <div className="news-date">
                          <CalendarIcon />
                          {formatDate(news.date)}
                        </div>
                        <h3 className="news-card-title">{news.title}</h3>
                      </div>
                    </article>
                  ))
                ) : (
                  // Message si aucune actualité n'est trouvée (de Fichier 1)
                  <div className="loading-state">
                    <p className="loading-text">{t('news.noNews')}</p>
                  </div>
                )}
              </div>
            </LoadingWrapper>

            <button 
              className="carousel-nav carousel-next" 
              onClick={() => scrollCarousel('right')}
              aria-label="Article suivant"
            >
              ›
            </button>
          </div>

          {/* Section Newsletter */}
          <div className="newsletter-section">
            <h3 className="newsletter-title">{t('news.newsletter.title')}</h3>
            <p className="newsletter-description">
              {t('news.newsletter.description')}
            </p>

            {showThankYou ? (
              <div className="thank-you-message">
                <CheckIcon />
                {t('news.newsletter.thankYou')}
              </div>
            ) : (
              <div>
                {/* Le formulaire utilise maintenant handleSubscribe (Fichier 2) */}
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input 
                    type="email" 
                    value={email}
                    onChange={handleEmailChange}
                    placeholder={t('news.newsletter.placeholder')} 
                    className="newsletter-input"
                    aria-label="Email"
                    required
                  />
                  <button 
                    type="submit"
                    className="newsletter-btn"
                  >
                    {t('news.newsletter.subscribe')}
                  </button>
                </form>
                {errorMessage && (
                  <div className="error-message" role="alert">
                    {errorMessage}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;