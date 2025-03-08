import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import News from "./pages/News";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Navigation avec liens vers les sections */}
        <main>
          <Element name="home"><Home /></Element>
          <Element name="about"><About /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="services"><Services /></Element>
          <Element name="news"><News /></Element>
          <Element name="team"><Team /></Element>
          <Element name="contact"><Contact /></Element>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
