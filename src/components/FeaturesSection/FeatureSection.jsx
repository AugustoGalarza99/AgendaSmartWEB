import React from "react";
import { motion } from "framer-motion";
import { FaTasks, FaBell, FaUsers, FaMobileAlt } from "react-icons/fa";
import featureImage from "../../assets/1.png";
import "./FeatureSection.css";

function Features() {
  return (
    <motion.section
      className="features"
      id="features"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="features-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Imagen */}
        <motion.div
          className="features-image"
          variants={itemVariants} // Animación individual
        >
          <img
            src={featureImage}
            alt="Características de la App"
            className="image"
          />
        </motion.div>

        {/* Contenido */}
        <div className="features-content">
          <motion.h2
            className="features-title"
            variants={itemVariants} // Animación para el título
          >
            Características que te encantarán
          </motion.h2>
          <motion.p
            className="features-description"
            variants={itemVariants} // Animación para el texto
          >
            Descubre cómo nuestra agenda digital puede transformar tu día a día
            con herramientas avanzadas y fáciles de usar.
          </motion.p>
          <motion.div
            className="features-list"
            variants={listVariants} // Variantes para lista
          >
            <FeatureItem
              icon={<FaTasks />}
              title="Gestión de Tareas"
              text="Organiza, prioriza y completa tus tareas fácilmente."
            />
            <FeatureItem
              icon={<FaBell />}
              title="Recordatorios Inteligentes"
              text="No olvides nada importante con notificaciones automáticas."
            />
            <FeatureItem
              icon={<FaUsers />}
              title="Colaboración"
              text="Comparte tus tareas y proyectos con tu equipo."
            />
            <FeatureItem
              icon={<FaMobileAlt />}
              title="Compatibilidad Móvil"
              text="Disponible para iOS y Android, lleva tu agenda a todas partes."
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

// Componente de cada característica
const FeatureItem = ({ icon, title, text }) => {
  return (
    <motion.div
      className="feature-item"
      variants={itemVariants} // Animación individual para cada característica
    >
      <div className="icon">{icon}</div>
      <div>
        <h4 className="feature-title">{title}</h4>
        <p className="feature-text">{text}</p>
      </div>
    </motion.div>
  );
};

// Variantes para la animación
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3, // Retraso antes de animar los hijos
      staggerChildren: 0.2, // Espaciado entre animaciones de hijos
    },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default Features;
