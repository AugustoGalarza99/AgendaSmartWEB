import React from "react";
import { FaCheckCircle, FaShieldAlt, FaCogs } from "react-icons/fa"; // Importamos íconos específicos
import "./InfoCards.css";

function InfoCards() {
  return (
    <div className="info-cards">
      <div className="card">
        <h3 className="card-title">
          <FaCheckCircle className="icon" /> Simple
        </h3>
        <p className="card-text">
          Diseñado para que cualquier usuario pueda gestionar sus tareas sin
          complicaciones. ¡Intuitivo desde el primer clic!
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">
          <FaShieldAlt className="icon" /> Seguro
        </h3>
        <p className="card-text">
          Tus datos están protegidos con la última tecnología en seguridad.
          Prioridad total a tu privacidad.
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">
          <FaCogs className="icon" /> Customizable
        </h3>
        <p className="card-text">
          Personaliza cada aspecto del sistema según tus necesidades. ¡Hazlo
          único y a tu medida!
        </p>
      </div>
    </div>
  );
}

export default InfoCards;
