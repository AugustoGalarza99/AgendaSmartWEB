import React from "react";
import "./HeroSection.css";
import agendaImage from "../../assets/1.png";

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
          <button className="cta-button">Comienza ahora mismo</button>
        </div>

        {/* Imagen */}
        <div className="hero-image">
          <img src={agendaImage} alt="Presentación de la agenda digital" className="image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
