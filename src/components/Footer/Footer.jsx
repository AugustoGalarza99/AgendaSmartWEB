import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Sección de información */}
        <div className="footer-info">
          <h3 className="footer-title">AgendaSmart</h3>
          <p className="footer-text">
            Organiza tu vida, tus proyectos y tus citas con la mejor solución digital.
          </p>
        </div>

        {/* Sección de contacto */}
        <div className="footer-contact">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="footer-contact-list">
            <li>
              <HiOutlineLocationMarker className="footer-icon" />
              <span>Oncativo, Cordoba, Argentina</span>
            </li>
            <li>
              <FaWhatsapp className="footer-icon" />
              <span>+54 9 3572 674920</span>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <span>agendasmartapp@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="footer-social">
          <h4 className="footer-subtitle">Síguenos</h4>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} AgendaSmart. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
