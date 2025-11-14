import React, { useState } from "react";
import fidele from "../assets/team/fidele.jpg";
import yaoHonore from "../assets/team/honore.jpg";  
import souleymaneTroaore from "../assets/team/souleymane.jpg";  
import nitiemasylvius from "../assets/team/sylvius.jpg";
import siehoNarcisse from "../assets/team/narcisse.jpg";  
import ouedraogoPhil from "../assets/team/philjacq.jpg";
// import felicite from "../assets/team/felicite.jpg";


const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #00093D;
  color: #FFFFFF;
  overflow-x: hidden;
}

.team-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #00093D;
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
}

/* Fond animé */
.team-section::before {
  content: '';
  position: fixed;
  top: -30%;
  left: -20%;
  width: 80%;
  height: 120%;
  background: radial-gradient(circle, rgba(91, 124, 255, 0.1) 0%, transparent 70%);
  animation: floatBg 30s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

.team-section::after {
  content: '';
  position: fixed;
  bottom: -30%;
  right: -20%;
  width: 70%;
  height: 100%;
  background: radial-gradient(circle, rgba(139, 163, 255, 0.08) 0%, transparent 70%);
  animation: floatBg 25s infinite ease-in-out reverse;
  pointer-events: none;
  z-index: 0;
}

@keyframes floatBg {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, -30px) scale(1.1); }
}

.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle, rgba(91, 124, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.team-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.team-header {
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(91, 124, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(91, 124, 255, 0.3);
  padding: clamp(0.5rem, 1.5vw, 0.65rem) clamp(1rem, 2.5vw, 1.25rem);
  border-radius: 50px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 500;
  color: #B8C5E0;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.team-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.team-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #B8C5E0;
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grille d'équipe */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(2rem, 4vw, 3rem);
}

/* Carte membre */
.member-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  opacity: 0;
  animation: cardFadeIn 0.6s ease-out forwards;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.member-card.stagger-1 { animation-delay: 0.1s; }
.member-card.stagger-2 { animation-delay: 0.2s; }
.member-card.stagger-3 { animation-delay: 0.3s; }
.member-card.stagger-4 { animation-delay: 0.4s; }
.member-card.stagger-5 { animation-delay: 0.5s; }
.member-card.stagger-6 { animation-delay: 0.6s; }

.member-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 124, 255, 0.3);
  box-shadow: 0 20px 60px rgba(91, 124, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
}

/* Photo du membre */
.member-photo-container {
  position: relative;
  width: 100%;
  height: clamp(280px, 35vw, 350px);
  overflow: hidden;
  background: linear-gradient(135deg, rgba(91, 124, 255, 0.1) 0%, rgba(139, 163, 255, 0.1) 100%);
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.member-card:hover .member-photo {
  transform: scale(1.08);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 9, 61, 0.95) 80%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(1.5rem, 3vw, 2rem);
  opacity: 1;
  transition: opacity 0.4s ease;
}

.member-name {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.25rem, 0.5vw, 0.5rem);
  line-height: 1.2;
}

.member-role-badge {
  display: inline-block;
  padding: clamp(0.35rem, 1vw, 0.45rem) clamp(0.75rem, 2vw, 1rem);
  background: rgba(91, 124, 255, 0.2);
  border: 1px solid rgba(91, 124, 255, 0.4);
  border-radius: 20px;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  font-weight: 500;
  color: #8BA3FF;
  letter-spacing: 0.02em;
}

/* Contenu détaillé */
.member-content {
  padding: clamp(1.5rem, 3vw, 2rem);
}

.member-role {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #5B7CFF;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
  line-height: 1.3;
}

.member-skills {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: #B8C5E0;
  line-height: 1.7;
  font-weight: 300;
}

/* Indicateur d'info */
.info-indicator {
  position: absolute;
  bottom: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  width: clamp(32px, 6vw, 40px);
  height: clamp(32px, 6vw, 40px);
  background: rgba(91, 124, 255, 0.2);
  border: 1px solid rgba(91, 124, 255, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.member-card:hover .info-indicator {
  opacity: 1;
  transform: scale(1);
}

.info-indicator svg {
  width: 18px;
  height: 18px;
  color: #5B7CFF;
}

/* Modal détails */
.member-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 9, 61, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 2rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.member-modal.active {
  opacity: 1;
  pointer-events: all;
}

.modal-content {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3rem);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.member-modal.active .modal-content {
  transform: scale(1);
}

.modal-close {
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  width: 36px;
  height: 36px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: scale(1.1);
}

.modal-close svg {
  width: 20px;
  height: 20px;
  color: #F87171;
}

.modal-header {
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
}

.modal-name {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.modal-role {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #5B7CFF;
  font-weight: 600;
}

.modal-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: clamp(1.5rem, 3vw, 2rem) 0;
}

.modal-section-title {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  color: #FFFFFF;
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
}

.modal-skills {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #B8C5E0;
  line-height: 1.8;
  font-weight: 300;
}

/* Responsive */
@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .team-section {
    padding: clamp(2rem, 5vw, 3rem) clamp(0.75rem, 3vw, 1rem);
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .member-card {
    opacity: 1;
  }
}
`;

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const teamMembers = [
  {
    name: "YONLI Fidele",
    role: "CEO & Head of Innovation",
    skills: "Développeur web Fullstack, Business Intelligence & Data Analyst, Data/AI/Machine Learning Engineer, certifié Google Data Analytics, 2x certifié Microsoft",
    image: fidele
  },
  {
    name: "Souleymane TRAORÉ",
    role: "CTO & Lead Developer",
    skills: "Developpeur web/mobile Fullstack, AI Engineer spécialisé en deep learning et computer vision",
    image: souleymaneTroaore
  },
  {
    name: "YAO Honoré",
    role: "CFO & Partenariats",
    skills: "Consultant en Communication Financière et Relations Investisseurs, Certifié FMVA, CMSA, CBCA, FPWM et ESG de la Corporate Finance Institute",
    image: yaoHonore
  },
  {
    name: "NITIEMA Sylvius",
    role: "SIG & Télédétection Engineer",
    skills: "Expert en géosciences appliquées, spécialiste dans le management des données geospatiales et le traitement des données géophysiques",
    image: nitiemasylvius
  },
  {
    name: "SIEHO Narcisse",
    role: "Responsable Mécatronique",
    skills: "Ingénieur en Productique & Mecatronique/Developpeur Web, Expert en Automatisme et Robotique/Consultant support Technique à Alten",
    image: siehoNarcisse
  },
  {
    name: "OUEDRAOGO Phil Jacq",
    role: "Suivi de Projet & Evaluation",
    skills: "Expert gestion de projets IT, pilote des initiatives stratégiques en garantissant le respect des délais, budgets et exigences techniques",
    image: ouedraogoPhil
  }
];

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <style>{styles}</style>
      <section className="team-section" id="team">
        <div className="grid-overlay" aria-hidden="true"></div>
        
        <div className="team-container">
          <header className="team-header">
            <div className="team-badge">
              👥 Notre Équipe
            </div>
            <h2 className="team-title">Les Experts DigiScia</h2>
            <p className="team-subtitle">
              Une équipe passionnée de data scientists, ingénieurs et consultants dédiés à votre transformation digitale
            </p>
          </header>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article 
                key={index} 
                className={`member-card stagger-${index + 1}`}
                onClick={() => openModal(member)}
                role="button"
                tabIndex={0}
                aria-label={`En savoir plus sur ${member.name}`}
              >
                <div className="member-photo-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-photo"
                    loading="lazy"
                  />
                  <div className="photo-overlay">
                    <h3 className="member-name">{member.name}</h3>
                    <span className="member-role-badge">{member.role}</span>
                  </div>
                </div>
                
                <div className="member-content">
                  <p className="member-skills">{member.skills}</p>
                </div>

                <div className="info-indicator">
                  <InfoIcon />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Modal */}
        <div 
          className={`member-modal ${selectedMember ? 'active' : ''}`}
          onClick={closeModal}
        >
          {selectedMember && (
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close" 
                onClick={closeModal}
                aria-label="Fermer"
              >
                <CloseIcon />
              </button>
              
              <div className="modal-header">
                <h3 className="modal-name">{selectedMember.name}</h3>
                <p className="modal-role">{selectedMember.role}</p>
              </div>

              <div className="modal-divider"></div>

              <h4 className="modal-section-title">Expertise & Compétences</h4>
              <p className="modal-skills">{selectedMember.skills}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Team;