import React from "react";
import "./News.css";

function News() {
  const newsData = [
    {
      title: "News Title 1",
      date: "2025-03-01",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      title: "News Title 2",
      date: "2025-03-02",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      title: "News Title 3",
      date: "2025-03-03",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  return (
    <section className="news-section" id="news">
      <h1 className="news-title">News</h1>
      <div className="news-cards">
        {newsData.map((news, index) => (
          <article key={index} className="news-card">
            <h2 className="news-card-title">{news.title}</h2>
            <p className="news-card-date">{news.date}</p>
            <p className="news-card-content">{news.content}</p>
          </article>
        ))}
      </div>
      <div className="newsletter-subscribe">
        <button className="subscribe-button">S'abonner à la Newsletter</button>
      </div>
    </section>
  );
}

export default News;