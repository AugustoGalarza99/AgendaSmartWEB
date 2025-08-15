import React from "react";
import { Helmet } from "react-helmet-async";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoCards from "./components/InfoCards/InfoCards";
import Features from "./components/FeaturesSection/FeatureSection";
import Carousel from "./components/Carousel/Carousel";
import FAQ from "./components/Faq/Faq";
import Plans from "./components/Plans/Plans";
import AlbumDeFotos from "./components/AlbumDeFotos/AlbumDeFotos";
import Footer from "./components/Footer/Footer";
import FloatingWhatsAppButton from "./components/Whatsapp/Whatsapp";

function App() {
  return (
    <>
      {/* SEO base de la home */}
      <Helmet>
        <title>Agenda Smart | Turnos online | Administra tu negocio</title>
        <meta
          name="description"
          content="Agenda Smart: agenda online para gestionar turnos y reservas, enviar recordatorios por WhatsApp, administrar finanzas, catálogo de productos e integración con Mercado Pago."
        />
        {/* En SPA con anclas (#home, #plans, etc.) lo ideal es canonical a la home sin hash */}
        <link rel="canonical" href="https://www.agendasmartapp.com/" />
      </Helmet>

      <a href="#main" className="skip-link">Saltar al contenido</a>

      <header>
        <Navbar />
      </header>

      <main id="main">
        <section id="home" style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
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

        {/* OJO: tu sección se llama #plans (en inglés). Mantengo ese id para ser consistente */}
        <section id="plans">
          <Plans />
        </section>

        <AlbumDeFotos />
      </main>

      <footer>
        <Footer />
      </footer>

      <FloatingWhatsAppButton />
    </>
  );
}

export default App;
