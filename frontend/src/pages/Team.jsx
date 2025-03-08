import React from "react";
import "./Team.css";

// Importation des images locales
import fidele from "../assets/fidele.jpg";
import yaoHonore from "../assets/honore.jpg";  
import souleymaneTroaore from "../assets/souleymane.jpg";  
import nitiemasylvius from "../assets/sylvius.jpg"; 
import siehoNarcisse from "../assets/narcisse.jpg";  
import ouedraogoPhil from "../assets/philjacq.jpg"; 


function Team() {
  const teamMembers = [
    { 
      name: "YONLI Fidele", 
      role: "CEO & CTO", 
      skills : "Developpeur Fullstack, Business Intelligence Analyst, Data Scientist",
      image: fidele 
    },
    
    { 
      name: "YAO Honoré", 
      role: "CFO & Partenariats", 
      skills : "Developpeur Fullstack, Business Intelligence Analyst, Data Scientist",
      image: yaoHonore 
    },
 
    { 
      name: "Souleymane TRAORÉ", 
      role: "Software & AI Engineer", 
      skills : "Developpeur Fullstack, AI Engineer",
      image: souleymaneTroaore 
    },
    { 
      name: "NITIEMA Sylvius", 
      role: "SIG Engineer", 
      skills : "Developpeur Fullstack, Business Intelligence Analyst, Data Scientist",
      image: nitiemasylvius 
    },
    { 
      name: "SIEHO Narcisse", 
      role: "Automatisme & Robotique", 
      skills : "Developpeur Fullstack, Business Intelligence Analyst, Data Scientist",
      image: siehoNarcisse 
    },
    { 
      name: "OEDRAOGO Phil Jacq", 
      role: "Suivi de Projet & Evaluation", 
      skills : "Developpeur Fullstack, Business Intelligence Analyst, Data Scientist",
      image: ouedraogoPhil
    } 
  ]; 

  return (
    <section className="team-section" id="team">
      <h1 className="team-title">Notre Équipe</h1>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="book">
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
              <p>{member.name} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;