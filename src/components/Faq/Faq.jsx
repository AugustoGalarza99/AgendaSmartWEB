import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faqImage from "../../assets/faq.png";
import "./Faq.css"; 

function FAQ() {
  const faqs = [
    {
      question: "¿Qué es AgendaSmart?",
      answer:
        "AgendaSmart es una solución digital diseñada para ayudarte a organizar tus tareas, citas y proyectos de manera eficiente y sencilla.",
    },
    {
      question: "¿Es realmente una aplicación propia?",
      answer:
        "Así es, creamos y configuramos tu propia aplicación en muy poco tiempo para que puedas mejorar los rendimientos de tu negocio.",
    },
    {
      question: "¿Puedo agregar más funciones al sistema?",
      answer:
        "Sí, es posible. Todas las nuevas funciones serán analizadas y cotizadas según lo acordado.",
    },
    {
      question: "¿Debo descargar algo o mis clientes?",
      answer:
        "No debes descargar nada ya que el sistema funciona desde un navegador web. Solo ingresas al link y tienes acceso a todo.",
    },
    {
      question: "¿Es segura mi información?",
      answer:
        "¡Por supuesto! Utilizamos tecnologías avanzadas de encriptación para garantizar que tus datos estén protegidos en todo momento.",
    },
    {
      question: "¿Puedo personalizar mi experiencia?",
      answer:
        "Sí, AgendaSmart te permite ajustar configuraciones, categorías y notificaciones para adaptarse a tus necesidades específicas.",
    },
    {
      question: "¿En qué dispositivos funciona?",
      answer:
        "AgendaSmart está disponible para dispositivos iOS, Android y también puede accederse desde el navegador en tu computadora.",
    },
    {
      question: "¿Qué información debo brindar?",
      answer:
        "El cliente deberá proporcionar toda la información necesaria para completar el diseño del logo, colores de la aplicación y carga de datos.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <motion.h2
        className="faq-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Preguntas Frecuentes
      </motion.h2>
      <div className="faq-content">
        <motion.div
          className="faq-image"
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={faqImage} alt="Ilustración de preguntas frecuentes" loading="lazy" />
        </motion.div>
        <motion.div
          className="faq-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              variants={faqVariants}
              whileHover={{ scale: 1.01, boxShadow: "0 8px 20px rgba(0, 74, 173, 0.2)" }}
              tabIndex={0}
              onClick={() => toggleFAQ(index)}
            >
              <div
                className="faq-question"
                role="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="faq-icon-container"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <FaChevronUp aria-label="Cerrar respuesta" />
                  ) : (
                    <FaChevronDown aria-label="Abrir respuesta" />
                  )}
                </motion.span>
              </div>
              <motion.div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const faqVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default FAQ;