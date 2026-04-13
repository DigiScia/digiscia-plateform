import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Team.css";
// Importation des images
import fidele from "../assets/team/fidele.webp";
import yaoHonore from "../assets/team/honore.webp";  
import souleymaneTroaore from "../assets/team/souleymane.webp";  
import nitiemasylvius from "../assets/team/sylvius.webp";
import siehoNarcisse from "../assets/team/narcisse.webp";  
import ouedraogoPhil from "../assets/team/philjacq.webp";
import abdel from "../assets/team/abdel.webp";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"; // Optionnel, pour le style

function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "YONLI Fidele",
      role: t('team.members.fidele.role'),
      skills: t('team.members.fidele.skills'),
      image: fidele
    },
    {
      name: "Souleymane TRAORÉ",
      role: t('team.members.souleymane.role'),
      skills: t('team.members.souleymane.skills'),
      image: souleymaneTroaore
    },
    {
      name: "Abdel Nasser SAVADOGO",
      role: t('team.members.abdel.role'),
      skills: t('team.members.abdel.skills'),
      image: abdel
    },
    {
      name: "NITIEMA Sylvius",
      role: t('team.members.sylvius.role'),
      skills: t('team.members.sylvius.skills'),
      image: nitiemasylvius
    },
    {
      name: "OUEDRAOGO Phil Jacq",
      role: t('team.members.phil.role'),
      skills: t('team.members.phil.skills'),
      image: ouedraogoPhil
    },
    {
      name: "SIEHO Narcisse",
      role: t('team.members.narcisse.role'),
      skills: t('team.members.narcisse.skills'),
      image: siehoNarcisse
    },
    {
      name: "YAO Honoré",
      role: t('team.members.honore.role'),
      skills: t('team.members.honore.skills'),
      image: yaoHonore
    }
  ];

  // Petit effet de scroll reveal si tu veux l'ajouter plus tard
  // Petit effet de scroll reveal si tu veux l'ajouter plus tard
  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => card.style.opacity = '1');
  }, []);

  const TeamCard = ({ member, index }) => (
    <div className="team-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="image-wrapper">
        <div className="image-glow"></div>
        <img src={member.image} alt={member.name} className="team-image" loading="lazy" />
      </div>
      
      <span className="member-role">{member.role}</span>
      <h3 className="member-name">{member.name}</h3>
      <div className="divider"></div>
      
      <p className="member-skills">
        {member.skills}
      </p>
    </div>
  );

  return (
    <section className="team-section" id="team">
      {/* Texture de fond */}
      <div className="team-glow"></div>
      
      <div className="team-container">
        <header className="team-header">
          <span className="badge-pill">{t('team.badge')}</span>
          <h1 className="team-title">{t('team.title')}</h1>
          <p className="team-subtitle">
            {t('team.subtitle')}
          </p>
        </header>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;