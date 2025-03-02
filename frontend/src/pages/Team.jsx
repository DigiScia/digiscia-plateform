import React from "react";
import "./Team.css";

function Team() {
  const teamMembers = [
    { name: "YONLI Fidele", role: "CEO & CTO", image: "https://via.placeholder.com/150" },
    { name: "YAO Honoré", role: "CFO & Partenariats", image: "https://via.placeholder.com/150" },
    { name: "Souleymane TRAORÉ", role: "Software & AI Engineer", image: "https://via.placeholder.com/150" },
    { name: "NITIEMA Sylvius", role: "SIG Engineer", image: "https://via.placeholder.com/150" },
    { name: "SIEHO Narcisse", role: "Mecatronic Engineer", image: "https://via.placeholder.com/150" },
    { name: "OEDRAOGO Phil Jacq", role: "Suivi de Projet & Evaluation", image: "https://via.placeholder.com/150" }
  ];

  return (
    <section className="team-section" id="team">
      <h1 className="team-title">Notre Équipe</h1>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <article key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-card-image" />
            <h2 className="team-card-name">{member.name}</h2>
            <p className="team-card-role">{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;