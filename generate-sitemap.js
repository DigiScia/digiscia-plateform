import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, name, type, image, url }) {
    // 1. Définition de la structure Schema.org (Organization)
    const schemaOrgData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DigiScia",
        "url": "https://www.digiscia.com", // Ton URL principale
        "logo": "https://www.digiscia.com/logo.png", // Lien vers ton logo
        "description": "Startup spécialisée en Intelligence Artificielle, Ingénierie de données et Automatisation au Burkina Faso et dans l'espace AES.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ouagadougou",
            "addressCountry": "BF"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "areaServed": ["BF", "ML", "NE"], // Cible Burkina, Mali, Niger (AES)
            "availableLanguage": ["French", "English"]
        },
        // C'EST ICI BOOSTER LE SEO SOCIAL 👇
        "sameAs": [
            "https://www.linkedin.com/company/digiscia", // Remplace par tes vrais liens
            "https://www.facebook.com/digiscia",
        ]
    };

    return (
        <Helmet>
            {/* Balises Meta Standards */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel="canonical" href={url || window.location.href} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url || window.location.href} />
            <meta property="og:site_name" content="DigiScia" />

            {/* Twitter */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Injection du script JSON-LD pour Google */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgData)}
            </script>
        </Helmet>
    );
}

SEO.defaultProps = {
    title: 'DigiScia - Expert IA & Data au Burkina Faso (AES)',
    description: 'DigiScia est une startup leader en Intelligence Artificielle, Ingénierie de données et Automatisation pour l\'Afrique francophone (Burkina Faso, AES).',
    keywords: 'startup, Intelligence artificielle, ingénierie de données, qualité de données, automatisation, Afrique, burkina faso, AES, innovation',
    name: 'DigiScia',
    type: 'website'
};