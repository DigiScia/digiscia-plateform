import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return (
        <div className="language-selector">
            <button
                onClick={() => changeLanguage('fr')}
                className={i18n.language === 'fr' ? 'active' : ''}
                aria-label="Français"
                title="Français"
            >
                FR
            </button>
            <span className="language-divider">|</span>
            <button
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'active' : ''}
                aria-label="English"
                title="English"
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSelector;
