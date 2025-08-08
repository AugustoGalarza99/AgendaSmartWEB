import React from "react";
import { motion } from "framer-motion";
import { FaTasks, FaBell, FaUsers, FaMobileAlt, FaMoneyBillAlt } from "react-icons/fa";
import featureImage from "../../assets/fotofeature.png";
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
        {/* Imagen con botón debajo */}
        <motion.div
          className="features-image"
          variants={imageVariants} // Animación específica para la imagen
        >
          <img
            src={featureImage}
            alt="Características de la App"
            className="imagen"
          />
          <motion.a
            href="#cta"
            className="cta-button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Prueba ahora
          </motion.a>
        </motion.div>

        {/* Contenido */}
        <div className="features-content">
          <motion.h2
            className="features-title"
            variants={itemVariants}
          >
            Características que te encantarán
          </motion.h2>
          <motion.p
            className="features-description"
            variants={itemVariants}
          >
            Descubre cómo nuestra agenda digital puede transformar tu día a día
            con herramientas avanzadas y fáciles de usar.
          </motion.p>
          <motion.div
            className="features-list"
            variants={listVariants}
          >
            <FeatureItem
              icon={<FaTasks aria-label="Gestión de Tareas" />}
              title="Gestión de Tareas"
              text="Organiza, prioriza y completa tus tareas fácilmente."
            />
            <FeatureItem
              icon={<FaBell aria-label="Recordatorios Inteligentes" />}
              title="Recordatorios Inteligentes"
              text="No olvides nada importante con recordatorios via WhatsApp."
            />
            <FeatureItem
              icon={<FaMoneyBillAlt aria-label="Cobro de Señas" />}
              title="Cobro de Señas"
              text="Reducí el ausentismo aceptando pagos online por adelantado, de manera segura y eficiente a través de nuestra integración con Mercado Pago."
            />
            <FeatureItem
              icon={<FaMobileAlt aria-label="Compatibilidad Móvil" />}
              title="Compatibilidad Móvil"
              text="Disponible para iOS y Android, lleva tu agenda a todas partes."
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

const FeatureItem = ({ icon, title, text, ctaText, ctaLink }) => {
  return (
    <motion.div
      className="feature-item"
      variants={itemVariants}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="icon-container">{icon}</div>
      <div>
        <h4 className="feature-title">{title}</h4>
        <p className="feature-text">{text}</p>
        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            className="feature-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

export default Features;