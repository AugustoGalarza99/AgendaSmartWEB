import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoCards from "./components/InfoCards/InfoCards";
import Features from "./components/FeaturesSection/FeatureSection";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div>
      <HeroSection />
      <InfoCards />
      <Features />
      <Carousel />
    </div>
  );
}


export default App;
