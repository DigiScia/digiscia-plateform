import React, { useEffect } from "react";
import "./Team.css";
// Importation des images
import fidele from "../assets/team/fidele.jpg";
import yaoHonore from "../assets/team/honore.jpg";  
import souleymaneTroaore from "../assets/team/souleymane.jpg";  
import nitiemasylvius from "../assets/team/sylvius.jpg";
import siehoNarcisse from "../assets/team/narcisse.jpg";  
import ouedraogoPhil from "../assets/team/philjacq.jpg";
import abdel from "../assets/team/abdel.jpg";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"; // Optionnel, pour le style

const teamMembers = [
  {
    name: "YONLI Fidele",
    role: "CEO & Innovation",
    fullRole: "Founder - CEO & Head of Innovation",
    skills: "Développeur Fullstack, BI & Data Analyst, Machine Learning Engineer. Certifié Google & Microsoft.",
    image: fidele
  },
  {
    name: "Souleymane TRAORÉ",
    role: "CTO & Lead Dev",
    fullRole: "CTO & Lead Developer",
    skills: "Développeur Web/Mobile Fullstack, AI Engineer. Architecte de solutions techniques robustes.",
    image: souleymaneTroaore
  },
  {
    name: "Abdel Nasser SAVADOGO",
    role: "Media Manager",
    fullRole: "Responsable DigiScia Media",
    skills: "Développeur Fullstack & Expert Réseaux Informatiques. Gestion de la communication digitale.",
    image: abdel
  },
  {
    name: "NITIEMA Sylvius",
    role: "Academy Manager",
    fullRole: "Responsable DigiScia Academy",
    skills: "Expert Géosciences, Management des données géospatiales et traitement de données géophysiques.",
    image: nitiemasylvius
  },
  {
    name: "SIEHO Narcisse",
    role: "Store Manager",
    fullRole: "Responsable DigiScia Store",
    skills: "Ingénieur Productique & Mécatronique, Expert Automatisme et Robotique. Consultant Support Technique.",
    image: siehoNarcisse
  },
  {
    name: "YAO Honoré",
    role: "CFO & Partners",
    fullRole: "CFO & Partenariats",
    skills: "Communication Financière, Relations Investisseurs. Certifié FMVA, CMSA, CBCA, ESG & Banque Mondiale.",
    image: yaoHonore
  },
  {
    name: "OUEDRAOGO Phil Jacq",
    role: "Project Lead",
    fullRole: "Suivi de Projet & Evaluation",
    skills: "Expert gestion de projets IT. Pilotage stratégique, respect des délais, budgets et exigences techniques.",
    image: ouedraogoPhil
  }
];

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

function Team() {
  // Petit effet de scroll reveal si tu veux l'ajouter plus tard
  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => card.style.opacity = '1');
  }, []);

  return (
    <section className="team-section" id="team">
      {/* Texture de fond */}
      <div className="team-glow"></div>
      
      <div className="team-container">
        <header className="team-header">
          <span className="badge-pill">Talents & Leadership</span>
          <h1 className="team-title">Notre Équipe</h1>
          <p className="team-subtitle">
            Une synergie d'experts passionnés par la data, l'ingénierie et l'innovation, 
            unis pour propulser votre transformation numérique.
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