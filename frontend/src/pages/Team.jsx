import React from "react";
import "./Team.css";
// Importation des images locales
import fidele from "../assets/fidele.jpg";
import yaoHonore from "../assets/honore.jpg";  
import souleymaneTroaore from "../assets/souleymane.jpg";  
import nitiemasylvius from "../assets/sylvius.jpg";
import siehoNarcisse from "../assets/narcisse.jpg";  
import ouedraogoPhil from "../assets/philjacq.jpg";
import felicite from "../assets/felicite.jpg";

const teamMembers = [
  {
    name: "YONLI Fidele",
    role: "CEO & CTO",
    skills: "Développeur web Fullstack, Business Intelligence & Data Analyst, Data/AI/Machine Learning Engineer, certifié Google Data Analytics, 2x certifié Microsoft",
    image: fidele
  },
  {
    name: "YAO Honoré",
    role: "CFO & Partenariats",
    skills: "Consultant en Communication Financière et Relations Investisseurs, Certifié FMVA, CMSA, CBCA, FPWM et ESG de la Corporate Finance Institute, Certifié en Partenariats Publics Privés du Groupe de la Banque Mondiale",
    image: yaoHonore
  },
  {
    name: "Souleymane TRAORÉ",
    role: "Software & AI Engineer",
    skills: "Developpeur Fullstack, AI Engineer",
    image: souleymaneTroaore
  },
  {
    name: "NITIEMA Sylvius",
    role: "SIG & Teledetection Engineer",
    skills: "Expert en géosciences appliquées, spécialiste dansa management des données geospatiales et le traitement des données géophysiques",
    image: nitiemasylvius
  },
  {
    name: "SIEHO Narcisse",
    role: "Automatisme & Robotique",
    skills: "Developpeur web, ingénieur mecatronicien",
    image: siehoNarcisse
  },
  {
    name: "OEDRAOGO Phil Jacq",
    role: "Suivi de Projet & Evaluation",
    skills: "Expert gestion de projets IT, Phil Jacq OUEDRAOGO pilote des initiatives stratégiques en garantissant le respect des délais, des budgets et des exigences techniques.",
    image: ouedraogoPhil
  },
  {
    name: "Félicité Traoré",
    role: "Community Management & SEO & Designer Graphic",
    skills: "Developpeur Fullstack & Réseaux Informatiques",
    image: felicite
  }
];

const TeamCard = ({ member }) => (
  <div className="book">
    <div className="book-content">
      <h2 className="team-card-name">{member.role}</h2>
      <p className="team-card-role">{member.skills}</p>
    </div>
    <div
      className="cover"
      style={{
        backgroundImage: `url(${member.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <p>{member.name}</p>
    </div>
  </div>
);

function Team() {
  return (
    <section className="team-section" id="team">
      <h1 className="team-title">Notre Équipe</h1>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}

export default Team;