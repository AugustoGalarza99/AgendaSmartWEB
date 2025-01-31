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
import FloatingWhatsAppButton from "./components/Whatsapp/Whatsapp";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" style={{ height: "100vh", backgroundColor: "#f9f9f9" }}>
        <HeroSection />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="cards">
        <InfoCards />
      </section>
      <section id="carousel">
        <Carousel />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="plans">
        <Plans />
      </section>
      <Footer />
      <FloatingWhatsAppButton />
    </div>    
  );
}

export default App;