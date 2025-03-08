import React from "react";
import "./Services.css";



import web_mobile from "../assets/web_mobile.jpg";
import bi from "../assets/bi.jpg";  
import bigdata from "../assets/bigdata.jpg";  
import cybersecurity from "../assets/cybersecurity.jpg"; 
import ia from "../assets/ia.jpg";  
import formation from "../assets/formation.jpg"; 
import robotics from "../assets/robotics.jpg"; 
import iot from "../assets/iot.jpg";
import sig from "../assets/sig.jpg";
import audit from "../assets/audit.jpg";

function Services() {
  const services = [
    { title: "Web & Mobile", image: web_mobile },
    { title: "Intelligence Artificielle", image: ia },
    { title: "SIG", image: sig },
    { title: "Aide à la décision", image: bi },
    { title: "Big Data", image: bigdata },
    { title: "IOT", image: iot },
    { title: "Cybersécurité", image: cybersecurity},
    { title: "Audit des SI", image: audit },
    { title: "Automatisme & Robotique", image: robotics },
    { title: "Formation", image: formation }
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
