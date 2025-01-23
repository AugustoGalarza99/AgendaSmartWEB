import React from "react";
import "./HeroSection.css";
import agendaImage from "../../assets/1.png"; // Asegúrate de colocar tu imagen en la carpeta assets o ajustar la ruta.

function HeroSection() {
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Organiza tu día <span>de manera inteligente</span>
        </h1>
        <p className="hero-text">
          Descubre la mejor manera de gestionar tus tareas, eventos y
          recordatorios con nuestra agenda digital intuitiva y eficiente.
        </p>
        <button className="cta-button">Comienza ahora mismo</button>
      </div>
      <div className="hero-image">
        <img
          src={agendaImage}
          alt="Presentación de la agenda digital"
          className="image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
