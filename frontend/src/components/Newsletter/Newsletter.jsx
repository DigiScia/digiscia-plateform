import React, { useState } from 'react';
import './Newsletter.css';

function News() {
  const [email, setEmail] = useState('');
  
  const newsData = [
    {
      title: "News Title 1",
      date: "2025-03-01",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      title: "News Title 2", 
      date: "2025-03-02",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      title: "News Title 3",
      date: "2025-03-03", 
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add email validation logic
    if (email && /\S+@\S+\.\S+/.test(email)) {
      alert(`Subscribed with email: ${email}`);
      // Here you would typically send the email to your backend
      setEmail(''); // Clear the input after submission
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <section className="news-section">
      <h2 className="news-title">Latest News</h2>
      
      <div className="news-cards">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <h3 className="news-card-title">{news.title}</h3>
            <p className="news-card-date">{news.date}</p>
            <p className="news-card-content">{news.content}</p>
          </div>
        ))}
      </div>

      <div className="newsletter-subscribe">
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input 
            type="email" 
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email" 
            className="newsletter-email-input"
            required
          />
          <button type="submit" className="subscribe-button">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}

export default News;