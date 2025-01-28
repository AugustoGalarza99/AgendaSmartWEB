import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      // Solo cierra el menú si está en modo móvil
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1 className="navbar-logo">AgendaSmart</h1>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
        <div className="navegable">
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                activeClass="nav-menu-active" // Clase para el enlace activo
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="features"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                activeClass="nav-menu-active"
              >
                Características
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="carousel"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                activeClass="nav-menu-active"
              >
                Nuestra App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="faq"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                activeClass="nav-menu-active"
              >
                Preguntas Frecuentes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="plans"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                activeClass="nav-menu-active"
              >
                Planes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="footer"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                activeClass="nav-menu-active"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
