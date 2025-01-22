import React from "react";
import { FaTasks, FaBell, FaUsers, FaMobileAlt } from "react-icons/fa"; // Importamos íconos
import featureImage from "../../assets/1.png"; // Asegúrate de colocar tu imagen
import "./FeatureSection.css";

function Features() {
  return (
    <div className="features">
      {/* Imagen de la App */}
      <div className="features-image">
        <img
          src={featureImage}
          alt="Características de la App"
          className="image"
        />
      </div>

      {/* Contenido de las Características */}
      <div className="features-content">
        <h2 className="features-title">Características que te encantarán</h2>
        <p className="features-description">
          Descubre cómo nuestra agenda digital puede transformar tu día a día
          con herramientas avanzadas y fáciles de usar.
        </p>
        <ul className="features-list">
          <li className="feature-item">
            <FaTasks className="icon" />
            <div>
              <h4 className="feature-title">Gestión de Tareas</h4>
              <p className="feature-text">
                Organiza, prioriza y completa tus tareas fácilmente.
              </p>
            </div>
          </li>
          <li className="feature-item">
            <FaBell className="icon" />
            <div>
              <h4 className="feature-title">Recordatorios Inteligentes</h4>
              <p className="feature-text">
                No olvides nada importante con notificaciones automáticas.
              </p>
            </div>
          </li>
          <li className="feature-item">
            <FaUsers className="icon" />
            <div>
              <h4 className="feature-title">Colaboración</h4>
              <p className="feature-text">
                Comparte tus tareas y proyectos con tu equipo.
              </p>
            </div>
          </li>
          <li className="feature-item">
            <FaMobileAlt className="icon" />
            <div>
              <h4 className="feature-title">Compatibilidad Móvil</h4>
              <p className="feature-text">
                Disponible para iOS y Android, lleva tu agenda a todas partes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
