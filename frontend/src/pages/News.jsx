import React from "react";
import "./News.css";
import Newsletter from "../components/Newsletter/Newsletter.jsx";


function News() {
  return (
    <section className="news-section" id="news">
      <div className="newsletter-subscribe">
        <Newsletter />
      </div>
    </section>
  );
}

export default News;