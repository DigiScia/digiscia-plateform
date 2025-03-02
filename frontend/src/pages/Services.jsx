import React from "react";
import "./Services.css";

function Services() {
  const services = [
    { title: "Web & Mobile", image: "https://via.placeholder.com/200?text=Web+%26+Mobile" },
    { title: "Intelligence Artificielle", image: "https://via.placeholder.com/200?text=IA" },
    { title: "SIG", image: "https://via.placeholder.com/200?text=SIG" },
    { title: "Aide à la décision", image: "https://via.placeholder.com/200?text=Aide+à+la+décision" },
    { title: "Big Data", image: "https://via.placeholder.com/200?text=Big+Data" },
    { title: "IOT", image: "https://via.placeholder.com/200?text=IOT" },
    { title: "Cybersécurité", image: "https://via.placeholder.com/200?text=Cybersécurité" },
    { title: "Audit des SI", image: "https://via.placeholder.com/200?text=Audit+des+SI" },
    { title: "Automatisme & Robotique", image: "https://via.placeholder.com/200?text=Auto+%26+Robotique" }
  ];

  return (
    <section className="services-section" id="services">
      <h1 className="services-title">Nos Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-card-image" />
            <h2 className="service-card-title">{service.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
