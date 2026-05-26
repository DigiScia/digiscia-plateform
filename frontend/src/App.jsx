import React from "react";
import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import { scroller, Element } from "react-scroll";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import News from "./pages/News";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Article from "./pages/Article"; 
import LoadingWrapper from "./components/SplashScreen/LoadingWrapper.jsx";
import "./App.css";

function MainPage() {
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -80 // Compenser le header sticky
        });
      }, 500); // Laisser le temps aux composants de s'afficher
    }
  }, [searchParams]);

  return (
    <>
      <Header /> {/* Navigation avec liens vers les sections */}
      <main>
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="services"><Services /></Element>
        <Element name="news"><News /></Element>
        <Element name="team"><Team /></Element>
        <Element name="careers"><Careers /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [isAppLoading, setIsAppLoading] = React.useState(true);

  React.useEffect(() => {
    // Simuler un temps de chargement initial pour le branding
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LoadingWrapper isLoading={isAppLoading}>
        <Router>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/article/:id/:slug" element={<ArticlePageWrapper />} />
            </Routes>
          </div>
        </Router>
      </LoadingWrapper>
    </ThemeProvider>
  );
}

// Wrapper pour s'assurer que la page d'article charge proprement avec le Splash Screen
function ArticlePageWrapper() {
  return (
    <>
      <Header />
      <Article />
      <Footer />
    </>
  );
}

export default App;