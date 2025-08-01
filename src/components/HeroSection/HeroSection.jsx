import React from "react";
import "./HeroSection.css";
import agendaImage from "../../assets/fotohero.png";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Contenido */}
        <div className="hero-content">
          <h1 className="hero-title">
            Organiza tu día <span>de manera inteligente</span>
          </h1>
          <p className="hero-text">
            Descubre la mejor manera de gestionar tus tareas, eventos y recordatorios con nuestra agenda digital intuitiva y eficiente.
          </p>
          <a
              href="https://wa.me/3572674920"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Comienza ahora mismo
            </a>
        </div>

        {/* Imagen */}
        <div className="hero-image">
          <img src={agendaImage} alt="Presentación de la agenda digital" className="imagen-hero" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
