import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaCogs } from "react-icons/fa"; // Importamos íconos específicos
import "./InfoCards.css";

function InfoCards() {
  return (
    <motion.div
      className="info-cards"
      id="cards"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="card" variants={cardVariants}>
        <h3 className="card-title">
          <motion.span
            className="icon"
            variants={iconVariants}
          >
            <FaCheckCircle />
          </motion.span>
          Simple
        </h3>
        <p className="card-text">
          Diseñado para que cualquier usuario pueda gestionar sus tareas sin
          complicaciones. ¡Intuitivo desde el primer clic!
        </p>
      </motion.div>
      <motion.div className="card" variants={cardVariants}>
        <h3 className="card-title">
          <motion.span
            className="icon"
            variants={iconVariants}
          >
            <FaShieldAlt />
          </motion.span>
          Seguro
        </h3>
        <p className="card-text">
          Tus datos están protegidos con la última tecnología en seguridad.
          Prioridad total a tu privacidad.
        </p>
      </motion.div>
      <motion.div className="card" variants={cardVariants}>
        <h3 className="card-title">
          <motion.span
            className="icon"
            variants={iconVariants}
          >
            <FaCogs />
          </motion.span>
          Customizable
        </h3>
        <p className="card-text">
          Personaliza cada aspecto del sistema según tus necesidades. ¡Hazlo
          único y a tu medida!
        </p>
      </motion.div>
    </motion.div>
  );
}

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animación secuencial entre las tarjetas
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Aparece desde abajo
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -90 }, // Los íconos comienzan pequeños y rotados
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export default InfoCards;
