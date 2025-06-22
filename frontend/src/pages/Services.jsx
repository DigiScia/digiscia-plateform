import React, { useMemo, useState, useEffect, useCallback } from "react";
import "./Services.css";
import ServiceDetailModal from "./ServiceDetailModal"; // Import du nouveau composant

// ===== COMPOSANTS D'ICÔNES =====
const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const DataIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
  </svg>
);

const ReportIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
  </svg>
);

const EngineeringIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

// ===== COMPOSANT SKELETON =====
const ServiceCardSkeleton = React.memo(() => (
  <div className="skeleton-card" role="status" aria-label="Chargement du service">
    <div className="skeleton-icon" aria-hidden="true"></div>
    <div className="skeleton-title" aria-hidden="true"></div>
    <div className="skeleton-text" aria-hidden="true"></div>
    <div className="skeleton-text" aria-hidden="true"></div>
    <div className="skeleton-text" aria-hidden="true"></div>
    <span className="sr-only">Chargement...</span>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

// ===== COMPOSANT CARTE DE SERVICE =====
const ServiceCard = React.memo(({ service, index, onServiceClick }) => {
  const handleClick = useCallback(() => {
    onServiceClick?.(service);
  }, [onServiceClick, service]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <article
      className={`service-card fade-in stagger-${index + 1}`}
      role="button"
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`En savoir plus sur ${service.title}`}
    >
      <div className="service-icon" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-description">{service.description}</p>
      <span className="service-card-link">
        En savoir plus
        <ArrowRightIcon />
      </span>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

// ===== COMPOSANT PRINCIPAL =====
function Services({ onServiceSelect }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null); // Nouvel état pour le service sélectionné

  // Simulation du chargement avec nettoyage
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Configuration des services avec plus de détails
  const services = useMemo(() => [
    {
      id: "web-mobile",
      title: "Développement Web & Mobile",
      description: "Applications web modernes et mobiles avec les dernières technologies React, Vue.js et React Native.",
      icon: <WebIcon />,
      category: "development",
      fullDescription: "Nous concevons et développons des applications web robustes et des expériences mobiles fluides, en utilisant des frameworks de pointe comme React, Vue.js pour le web, et React Native pour des applications multiplateformes performantes. Nos solutions sont responsives, optimisées pour la performance et l'expérience utilisateur, et conçues pour évoluer avec vos besoins.",
      features: [
        "Développement Front-end (React, Vue.js, Angular)",
        "Développement Back-end (Node.js, Python, PHP)",
        "Applications Mobiles NATIVES et Hybrides (React Native, Flutter)",
        "UX/UI Design intuitif et responsive",
        "Intégration d'API et microservices"
      ],
      useCases: "Sites e-commerce, plateformes SaaS, applications métier, portails clients, MVP de startups."
    },
    {
      id: "ai",
      title: "Intelligence Artificielle",
      description: "Solutions d'IA personnalisées, machine learning et deep learning pour automatiser vos processus.",
      icon: <AIIcon />,
      category: "ai",
      fullDescription: "Exploitez le potentiel de l'intelligence artificielle pour transformer vos opérations. Nous développons des modèles de Machine Learning et de Deep Learning sur mesure, de la reconnaissance d'images à l'analyse prédictive, en passant par le traitement du langage naturel (NLP). Nos solutions IA sont intégrées de manière transparente à votre infrastructure existante.",
      features: [
        "Machine Learning & Deep Learning",
        "Traitement du Langage Naturel (NLP)",
        "Vision par Ordinateur",
        "Analyse Prédictive et Recommandation",
        "Bots conversationnels et assistants virtuels"
      ],
      useCases: "Optimisation de processus, personnalisation de l'expérience client, détection de fraudes, maintenance prédictive, analyse de données non structurées."
    },
    {
      id: "governance",
      title: "Data Governance",
      description: "Stratégies de gouvernance des données pour assurer qualité, sécurité et conformité.",
      icon: <DataIcon />,
      category: "data",
      fullDescription: "La gouvernance des données est essentielle pour une gestion efficace et conforme de votre patrimoine informationnel. Nous vous aidons à établir des politiques, des processus et des rôles clairs pour garantir la qualité, la sécurité, la confidentialité et la conformité réglementaire de vos données, tout en maximisant leur valeur pour votre entreprise.",
      features: [
        "Audit et Évaluation de la Maturité des Données",
        "Définition de Politiques de Données",
        "Gestion de la Qualité des Données (DQM)",
        "Conformité Réglementaire (RGPD, HIPAA, etc.)",
        "Sécurité et Confidentialité des Données"
      ],
      useCases: "Mise en conformité RGPD, amélioration de la fiabilité des rapports, réduction des risques liés aux données, optimisation des processus décisionnels."
    },
    {
      id: "bi",
      title: "Business Intelligence",
      description: "Tableaux de bord interactifs et rapports analytiques pour une prise de décision éclairée.",
      icon: <ReportIcon />,
      category: "analytics",
      fullDescription: "Transformez vos données brutes en informations exploitables avec nos solutions de Business Intelligence. Nous concevons et implémentons des tableaux de bord interactifs, des rapports personnalisés et des outils d'analyse avancés qui vous offrent une vue à 360 degrés de vos performances, facilitant ainsi la prise de décisions stratégiques.",
      features: [
        "Conception et Développement de Tableaux de Bord",
        "Reporting Automatisé",
        "Analyse Ad-hoc et Exploration de Données",
        "Intégration de Sources de Données Multiples",
        "Formation et Support aux Utilisateurs"
      ],
      useCases: "Suivi des ventes, analyse financière, optimisation marketing, performance opérationnelle, compréhension du comportement client."
    },
    {
      id: "data-management",
      title: "Data Management",
      description: "Architecture et gestion de bases de données scalables pour optimiser vos performances.",
      icon: <CloudIcon />,
      category: "data",
      fullDescription: "Une gestion de données efficace est le pilier de toute stratégie digitale réussie. Nous vous accompagnons dans la conception, l'implémentation et la maintenance de vos infrastructures de données, qu'il s'agisse de bases de données relationnelles, NoSQL, ou de data lakes. Nous nous assurons que vos données sont accessibles, sécurisées et performantes.",
      features: [
        "Modélisation et Conception de Bases de Données",
        "Optimisation des Performances (SQL/NoSQL)",
        "Migration de Données",
        "Sécurité et Sauvegarde des Données",
        "Intégration et ETL (Extract, Transform, Load)"
      ],
      useCases: "Centralisation des données, amélioration des temps de réponse des applications, préparation des données pour l'analyse, réduction des coûts de stockage."
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      description: "Infrastructure cloud moderne, CI/CD et automatisation pour accélérer vos déploiements.",
      icon: <EngineeringIcon />,
      category: "infrastructure",
      fullDescription: "Accélérez le cycle de vie de vos applications et optimisez votre infrastructure avec nos services DevOps et Cloud. Nous mettons en place des pipelines CI/CD robustes, des infrastructures as Code (IaC) et des stratégies de déploiement continu sur les principales plateformes cloud (AWS, Azure, GCP), garantissant rapidité, fiabilité et scalabilité.",
      features: [
        "Mise en place de CI/CD (Jenkins, GitLab CI, GitHub Actions)",
        "Infrastructure as Code (Terraform, Ansible)",
        "Conteneurisation (Docker, Kubernetes)",
        "Migration et Optimisation Cloud (AWS, Azure, GCP)",
        "Surveillance et Logging (Prometheus, Grafana, ELK Stack)"
      ],
      useCases: "Déploiement rapide de nouvelles fonctionnalités, réduction des erreurs de production, scalabilité des applications, optimisation des coûts cloud."
    },
  ], []);

  // Gestionnaire de sélection de service
  const handleServiceClick = useCallback((service) => {
    setSelectedService(service);
    // onServiceSelect?.(service); // Si vous avez besoin de notifier un parent
  }, []);

  // Gestionnaire de fermeture du modal
  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  // Rendu mémorisé de la grille
  const serviceGrid = useMemo(() => (
    <div className="services-grid" role="list">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          onServiceClick={handleServiceClick}
        />
      ))}
    </div>
  ), [services, handleServiceClick]);

  // Rendu de la grille skeleton
  const skeletonGrid = useMemo(() => (
    <div className="services-grid" aria-busy="true">
      {Array.from({ length: 6 }, (_, index) => (
        <ServiceCardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  ), []);

  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services-container">
        <header className="services-header">
          <h2 id="services-title" className="services-title">
            Nos Services
          </h2>
          <p className="services-subtitle">
            Des solutions technologiques sur mesure pour transformer votre vision en réalité digitale
          </p>
        </header>

        {isLoading ? skeletonGrid : serviceGrid}

        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}

// Validation des props (optionnel avec PropTypes)
Services.defaultProps = {
  onServiceSelect: null,
};

export default Services;