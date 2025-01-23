import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoCards from "./components/InfoCards/InfoCards";
import Features from "./components/FeaturesSection/FeatureSection";
import Carousel from "./components/Carousel/Carousel";
import FAQ from "./components/Faq/Faq";
import Plans from "./components/Plans/Plans";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" style={{ height: "100vh", backgroundColor: "#f9f9f9" }}>
        <HeroSection />
      </section>
      <section id="features" style={{ height: "100vh", backgroundColor: "#f1f1f1" }}>
        <Features />
      </section>
      <section id="cards" style={{ height: "100vh", backgroundColor: "#e9e9e9" }}>
        <InfoCards />
      </section>
      <section id="carousel" style={{ height: "100vh", backgroundColor: "#e9e9e9" }}>
        <Carousel />
      </section>
      <section id="faq" style={{ height: "100vh", backgroundColor: "#e9e9e9" }}>
        <FAQ />
      </section>
      <section id="plans" style={{ height: "100vh", backgroundColor: "#e9e9e9" }}>
        <Plans />
      </section>
      <Footer />
    </div>
  );
}

export default App;