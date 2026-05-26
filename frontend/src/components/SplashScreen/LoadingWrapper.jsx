import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

/**
 * LoadingWrapper ensures the SplashScreen runs in its entirety (including exit animation)
 * before revealing the children content.
 * 
 * @param {boolean} isLoading - Controls the splash screen visibility.
 * @param {React.ReactNode} children - The content to reveal after loading.
 * @param {number} minDuration - Minimum time (ms) to keep the splash screen visible.
 */
const LoadingWrapper = ({ isLoading, children, minDuration = 1000 }) => {
  const [isInternalLoading, setIsInternalLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (!isLoading) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDuration - elapsedTime);
      
      const timer = setTimeout(() => {
        setIsInternalLoading(false);
      }, remainingTime);
      
      return () => clearTimeout(timer);
    } else {
      setIsInternalLoading(true);
      // Optional: keep showContent true if we are already showing it, 
      // but usually isLoading true means a new page/state.
      // For cross-transition, we might want to hide content again.
      setShowContent(false);
    }
  }, [isLoading, minDuration, startTime]);

  const handleSplashFinished = () => {
    setShowContent(true);
  };

  return (
    <>
      <SplashScreen isVisible={isInternalLoading} onFinished={handleSplashFinished} />
      {showContent && (
        <div className="reveal-content-animation">
          {children}
        </div>
      )}
      
      <style>{`
        .reveal-content-animation {
          animation: reveal-fade-in 0.8s ease-out forwards;
        }
        @keyframes reveal-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </>
  );
};

export default LoadingWrapper;
