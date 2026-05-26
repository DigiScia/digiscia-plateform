import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import api from '../api';
import './Careers.css';

function Careers() {
  const { t } = useTranslation();
  const [jobOffers, setJobOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: 'O',
    applicant_email: '',
    phone: '',
    projects: '',
    resume: null
  });
  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: '', success: false });

  useEffect(() => {
    fetchJobOffers();
  }, []);

  const fetchJobOffers = async () => {
    try {
      const response = await api.get('/api/v1/job-offers/');
      setJobOffers(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Erreur lors de la récupération des offres:", err);
      setError("Impossible de charger les offres d'emploi pour le moment.");
      setLoading(false);
    }
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
    setSubmitStatus({ loading: false, error: '', success: false });
    setFormData({
      first_name: '',
      last_name: '',
      gender: 'O',
      applicant_email: '',
      phone: '',
      projects: '',
      resume: null
    });
    document.body.style.overflow = 'hidden';
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedJob(null);
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resume) {
      setSubmitStatus(prev => ({ ...prev, error: "Veuillez joindre votre CV." }));
      return;
    }
    
    setSubmitStatus({ loading: true, error: '', success: false });
    
    const data = new FormData();
    data.append('job_offer', selectedJob.id);
    data.append('first_name', formData.first_name);
    data.append('last_name', formData.last_name);
    data.append('gender', formData.gender);
    data.append('applicant_email', formData.applicant_email);
    data.append('phone', formData.phone);
    data.append('projects', formData.projects);
    data.append('resume', formData.resume);

    try {
      await api.post('/api/v1/job-applications/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSubmitStatus({ loading: false, error: '', success: true });
      setTimeout(() => {
        handleCloseForm();
      }, 4000);
    } catch (err) {
      console.error("Erreur lors de la candidature:", err);
      const errorMsg = err.response?.data?.resume?.[0] || err.response?.data?.applicant_email?.[0] || "Une erreur s'est produite lors de l'envoi de votre candidature.";
      setSubmitStatus({ loading: false, error: errorMsg, success: false });
    }
  };

  return (
    <section className="careers-section" id="careers">
      <div className="grid-pattern"></div>
      
      {/* MODALE DE CANDIDATURE */}
      {showForm && createPortal(
        <div className="application-modal-overlay">
          <div className="application-modal">
            <button className="modal-close-btn" onClick={handleCloseForm}>&times;</button>
            <div className="application-header">
              <h2>Postuler : {selectedJob?.title}</h2>
            </div>

            {submitStatus.success ? (
              <div className="application-success">
                <div className="success-icon">✅</div>
                <h3>Candidature envoyée avec succès !</h3>
                <p>Notre équipe examinera votre profil et reviendra vers vous très vite.</p>
              </div>
            ) : (
              <div className="application-form-wrapper">
                <div className="form-header">
                  <h3>Formulaire de Candidature</h3>
                  <p>Veuillez remplir les informations ci-dessous pour soumettre votre candidature.</p>
                </div>

                <form className="simple-application-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="first_name">Prénom *</label>
                      <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleInputChange} required className="form-input" />
                    </div>
                    <div className="form-group half">
                      <label htmlFor="last_name">Nom *</label>
                      <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleInputChange} required className="form-input" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="gender">Genre *</label>
                      <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required className="form-input">
                        <option value="O">Autre</option>
                        <option value="M">Homme</option>
                        <option value="F">Femme</option>
                      </select>
                    </div>
                    <div className="form-group half">
                      <label htmlFor="phone">Téléphone *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="form-input" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="applicant_email">Adresse Email *</label>
                    <input type="email" id="applicant_email" name="applicant_email" value={formData.applicant_email} onChange={handleInputChange} required className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projects">Projets (Décrivez le projet dont vous êtes le plus fier) *</label>
                    <textarea id="projects" name="projects" value={formData.projects} onChange={handleInputChange} rows="4" className="form-input" required></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">CV (PDF, DOC/DOCX) *</label>
                    <input type="file" id="resume" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="form-input file-input" />
                  </div>

                  {submitStatus.error && <div className="error-message">{submitStatus.error}</div>}

                  <button type="submit" className="submit-btn" disabled={submitStatus.loading}>
                    {submitStatus.loading ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* LISTE DES OFFRES */}
      <div className="careers-container">
        <div className="careers-header">
          <div className="careers-badge">REJOIGNEZ-NOUS</div>
          <h2 className="careers-title">Carrières</h2>
          <p className="careers-subtitle">
            Découvrez nos offres d'emploi et venez contribuer au futur du digital avec DigiScia.
          </p>
        </div>

        {loading ? (
          <div className="loading-state">
            <p className="loading-text">Chargement des offres...</p>
          </div>
        ) : error ? (
          <div className="error-message text-center">{error}</div>
        ) : jobOffers.length === 0 ? (
          <div className="no-offers text-center">
            <p>Aucune offre d'emploi n'est disponible pour le moment. Revenez bientôt !</p>
          </div>
        ) : (
          <div className="job-offers-list">
            {jobOffers.map(job => {
              const locationMap = {
                'remote': 'En ligne',
                'hybrid': 'Hybride',
                'onsite': 'En présentiel'
              };
              const displayLocation = locationMap[job.location] || job.location;
              return (
              <div key={job.id} className="job-card">
                {job.image && (
                  <div className="job-card-image">
                    <img src={job.image} alt={job.title} />
                  </div>
                )}
                <div className="job-card-content">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-location">📍 {displayLocation}</span>
                    <span className="job-date">📅 Publié le {new Date(job.created_at).toLocaleDateString()}</span>
                    {job.deadline && <span className="job-deadline">⏳ Limite : {new Date(job.deadline).toLocaleDateString()}</span>}
                  </div>
                  <p className="job-description">{job.description}</p>
                </div>
                <div className="job-card-action">
                  <button className="apply-btn" onClick={() => handleApplyClick(job)}>
                    Postuler
                  </button>
                </div>
              </div>
            )})}
          </div>
        )}
      </div>
    </section>
  );
}

export default Careers;
