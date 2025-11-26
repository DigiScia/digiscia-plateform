import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    keywords,
    name,
    type,
    image,
    url,
    schemaType = 'Organization'
}) {
    // Schema.org Organization / Article structuré
    const schemaOrgData = {
        "@context": "https://schema.org",
        "@type": schemaType,
        "name": schemaType === 'Organization' ? 'DigiScia' : title,
        "url": url || (typeof window !== 'undefined' ? window.location.href : 'https://www.digiscia.com'),
        ...(schemaType === 'Organization' && {
            "logo": "https://www.digiscia.com/logo.png",
            "description": "Startup spécialisée en Intelligence Artificielle, Ingénierie de données et Automatisation au Burkina Faso et dans l'espace AES.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ouagadougou",
                "addressCountry": "BF"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "areaServed": ["BF", "ML", "NE"],
                "availableLanguage": ["French", "English"]
            },
            "sameAs": [
                "https://www.linkedin.com/company/digiscia",
                "https://www.facebook.com/digiscia"
            ]
        }),
        ...(schemaType === 'NewsArticle' && {
            "headline": title,
            "description": description,
            "image": image || '/og-default-digiscia.jpg',
            "datePublished": new Date().toISOString(),
            "author": {
                "@type": "Organization",
                "name": "DigiScia"
            }
        })
    };

    const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    const ogImage = image || '/og-default-digiscia.jpg';

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel="canonical" href={pageUrl} />

            {/* Language and locale */}
            <meta name="language" content="French" />
            <meta property="og:locale" content="fr_FR" />

            {/* Theme color for mobile browsers */}
            <meta name="theme-color" content="#5B7CFF" />

            {/* Facebook / Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:site_name" content="DigiScia" />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgData)}
            </script>
        </Helmet>
    );
}

// Mettre à jour les defaultProps avec tes mots-clés cibles
SEO.defaultProps = {
    title: 'DigiScia - Expert IA & Data au Burkina Faso (AES)',
    description: 'ESN leader en Intelligence Artificielle, Qualité de données et Automatisation. Centre d\'innovation technologique pour l\'Afrique francophone et l\'espace AES.',
    keywords: 'startup, Intelligence artificielle, ingénierie de données, qualité de données, automatisation, ESN, Burkina Faso, AES, Afrique francophone, transformation digitale',
    name: 'DigiScia',
    type: 'website',
    schemaType: 'Organization'
};