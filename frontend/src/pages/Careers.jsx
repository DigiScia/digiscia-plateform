import React, { useState, useEffect, useRef } from 'react';
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

  const [iframeHeights, setIframeHeights] = useState({});
  const [activeDetailJob, setActiveDetailJob] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const drawerContentRef = useRef(null);

  useEffect(() => {
    if (drawerContentRef.current) {
      drawerContentRef.current.scrollTop = 0;
    }
  }, [activeDetailJob, showDetailModal]);



  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'resize-iframe') {
        setIframeHeights(prev => ({
          ...prev,
          [event.data.jobId]: event.data.height
        }));
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    fetchJobOffers();
  }, []);

  const isHtml = (str) => {
    if (!str || typeof str !== 'string') return false;
    return /<[a-z][\s\S]*>/i.test(str);
  };

  const stripHtmlAndTruncate = (html, maxLength = 150) => {
    if (!html) return '';
    try {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const text = doc.body.textContent || doc.body.innerText || '';
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
    } catch (e) {
      return html.substring(0, maxLength) + '...';
    }
  };

  const handleOpenDetailModal = (job) => {
    setActiveDetailJob(job);
    setShowDetailModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
    if (!showForm) {
      document.body.style.overflow = 'auto';
    }
  };


  const getIframeSrcDoc = (job) => {
    const resizeScript = `
      <script>
        function updateHeight() {
          window.parent.postMessage({
            type: 'resize-iframe',
            jobId: '${job.id}',
            height: document.documentElement.scrollHeight
          }, '*');
        }
        window.addEventListener('load', updateHeight);
        setTimeout(updateHeight, 100);
        setTimeout(updateHeight, 500);
        setTimeout(updateHeight, 1000);
        if (window.ResizeObserver) {
          const ro = new ResizeObserver(() => {
            updateHeight();
          });
          ro.observe(document.body);
        }
      </script>
    `;

    const desc = job.description || '';
    if (desc.includes('</html>')) {
      return desc.replace('</html>', resizeScript + '</html>');
    } else if (desc.includes('</body>')) {
      return desc.replace('</body>', resizeScript + '</body>');
    } else {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                color: #e2e8f0;
                background: transparent;
                line-height: 1.6;
              }
              ul, ol {
                padding-left: 20px;
              }
              p {
                margin-bottom: 1em;
              }
            </style>
          </head>
          <body>
            ` + desc + `
            ` + resizeScript + `
          </body>
        </html>
      `;
    }
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowDetailMobile(true);
  };

  const handleBackToList = () => {
    setShowDetailMobile(false);
  };

  const fetchJobOffers = async () => {
    try {
      const response = await api.get('/api/v1/job-offers/');
      setJobOffers(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Erreur lors de la récupération des offres:", err);
      setError(t('careers.error', "Impossible de charger les offres d'emploi pour le moment."));
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
    if (!showDetailModal) {
      document.body.style.overflow = 'auto';
    }
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
      setSubmitStatus(prev => ({ ...prev, error: t('careers.resumeRequired') }));
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
      const errorMsg = err.response?.data?.resume?.[0] || err.response?.data?.applicant_email?.[0] || t('careers.errorGeneric');
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
              <h2>{t('careers.modalTitle', { title: selectedJob?.title })}</h2>
            </div>

            {submitStatus.success ? (
              <div className="application-success">
                <div className="success-icon">✅</div>
                <h3>{t('careers.successTitle')}</h3>
                <p>{t('careers.successSubtitle')}</p>
              </div>
            ) : (
              <div className="application-form-wrapper">
                <div className="form-header">
                  <h3>{t('careers.formTitle')}</h3>
                  <p>{t('careers.formSubtitle')}</p>
                </div>

                <form className="simple-application-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="first_name">{t('careers.firstName')}</label>
                      <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleInputChange} required className="form-input" />
                    </div>
                    <div className="form-group half">
                      <label htmlFor="last_name">{t('careers.lastName')}</label>
                      <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleInputChange} required className="form-input" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="gender">{t('careers.gender')}</label>
                      <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required className="form-input">
                        <option value="O">{t('careers.genderOther')}</option>
                        <option value="M">{t('careers.genderMale')}</option>
                        <option value="F">{t('careers.genderFemale')}</option>
                      </select>
                    </div>
                    <div className="form-group half">
                      <label htmlFor="phone">{t('careers.phone')}</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="form-input" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="applicant_email">{t('careers.email')}</label>
                    <input type="email" id="applicant_email" name="applicant_email" value={formData.applicant_email} onChange={handleInputChange} required className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projects">{t('careers.projects')}</label>
                    <textarea id="projects" name="projects" value={formData.projects} onChange={handleInputChange} rows="4" className="form-input" required></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">{t('careers.resume')}</label>
                    <input type="file" id="resume" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="form-input file-input" />
                  </div>

                  {submitStatus.error && <div className="error-message">{submitStatus.error}</div>}

                  <button type="submit" className="submit-btn" disabled={submitStatus.loading}>
                    {submitStatus.loading ? t('careers.sending') : t('careers.submit')}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* MODALE DE DÉTAILS DE L'OFFRE */}
      {showDetailModal && activeDetailJob && createPortal(
        <div className="application-modal-overlay" onClick={handleCloseDetailModal}>
          <div className="job-details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseDetailModal}>&times;</button>
            
            <div className="modal-details-content" ref={drawerContentRef}>
              <div className="drawer-header">
                <div className="drawer-header-top">
                  {activeDetailJob.image && (
                    <div className="drawer-job-icon">
                      <img src={activeDetailJob.image} alt="" />
                    </div>
                  )}
                  <div className="drawer-title-container">
                    <h2 className="drawer-job-title">{activeDetailJob.title}</h2>
                  </div>
                </div>
                <div className="drawer-job-meta">
                  <span className="drawer-meta-item">📍 {
                    t('careers.locations.' + activeDetailJob.location, activeDetailJob.location)
                  }</span>
                  <span className="drawer-meta-item">📅 {t('careers.published')} {new Date(activeDetailJob.created_at).toLocaleDateString()}</span>
                  {activeDetailJob.deadline && (
                    <span className="drawer-meta-item drawer-deadline">
                      ⏳ {t('careers.deadline')} : {new Date(activeDetailJob.deadline).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
              
              <hr className="drawer-divider" />
              
              <div className="drawer-body">
                {isHtml(activeDetailJob.description) ? (
                  <iframe
                    title={`modal-job-desc-${activeDetailJob.id}`}
                    srcDoc={getIframeSrcDoc(activeDetailJob)}
                    className="job-description-iframe"
                    scrolling="no"
                    style={{ height: iframeHeights[activeDetailJob.id] || '350px' }}
                  />
                ) : (
                  <p className="job-description-text">{activeDetailJob.description}</p>
                )}
              </div>
            </div>
            
            <div className="job-details-modal-footer">
              <button className="details-btn secondary" onClick={handleCloseDetailModal}>
                {t('careers.close')}
              </button>
              {(() => {
                const isExpired = activeDetailJob.deadline && new Date(activeDetailJob.deadline + 'T23:59:59') < new Date();
                return (
                  <button 
                    className={`apply-btn ${isExpired ? 'expired-btn' : ''}`} 
                    onClick={() => {
                      handleCloseDetailModal();
                      handleApplyClick(activeDetailJob);
                    }}
                    disabled={isExpired}
                    style={isExpired ? {backgroundColor: '#ccc', cursor: 'not-allowed', color: '#666'} : {}}
                  >
                    {isExpired ? t('careers.expiredOffer') : t('careers.apply')}
                  </button>
                );
              })()}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* LISTE DES OFFRES */}
      <div className="careers-container">
        <div className="careers-header">
          <div className="careers-badge">{t('careers.badge')}</div>
          <h2 className="careers-title">{t('careers.title')}</h2>
          <p className="careers-subtitle">
            {t('careers.subtitle')}
          </p>
        </div>

        {loading ? (
          <div className="loading-state">
            <p className="loading-text">{t('careers.loading')}</p>
          </div>
        ) : error ? (
          <div className="error-message text-center">{error}</div>
        ) : jobOffers.length === 0 ? (
          <div className="no-offers text-center">
            <p>{t('careers.noOffers')}</p>
          </div>
        ) : (
          <div className="premium-jobs-grid">
            {jobOffers.map(job => {
              const displayLocation = t('careers.locations.' + job.location, job.location);
              const isExpired = job.deadline && new Date(job.deadline + 'T23:59:59') < new Date();
              
              return (
                <div key={job.id} className={`premium-job-card ${isExpired ? 'expired' : ''}`}>
                  <div className="card-header">
                    <div className="card-job-icon">
                      {job.image ? (
                        <img src={job.image} alt="" />
                      ) : (
                        <div className="card-job-icon-placeholder">💼</div>
                      )}
                    </div>
                    <div className="card-header-info">
                      <h3 className="card-job-title">{job.title}</h3>
                      <div className="card-job-meta">
                        <span className="meta-badge">📍 {displayLocation}</span>
                        {job.deadline && <span className="meta-badge deadline">⏳ {new Date(job.deadline).toLocaleDateString()}</span>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <p className="card-job-description">
                      {stripHtmlAndTruncate(job.description, 160)}
                    </p>
                  </div>
                  
                  <div className="card-footer">
                    <button className="details-btn" onClick={() => handleOpenDetailModal(job)}>
                      {t('careers.details')}
                    </button>
                    <button 
                      className={`apply-btn ${isExpired ? 'expired-btn' : ''}`} 
                      onClick={() => !isExpired && handleApplyClick(job)}
                      disabled={isExpired}
                      style={isExpired ? {backgroundColor: '#ccc', cursor: 'not-allowed', color: '#666'} : {}}
                    >
                      {isExpired ? t('careers.expired') : t('careers.apply')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </section>
  );
}

export default Careers;
