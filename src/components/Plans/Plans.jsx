import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import "./Plans.css";

function Plans() {
  const [professionalCount, setProfessionalCount] = useState(1);

  const plans = [
    {
      title: "Plan Básico",
      basePrice: 12000,
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuración de horarios", included: true },
        { name: "Recordatorios manuales vía WhatsApp", included: true },
        { name: "Reprogramación de turnos", included: true },
        { name: "Link personalizado del negocio", included: true },
        { name: "Soporte y mantenimiento", included: true },
        { name: "Reservas fijas", included: true },
        { name: "Consulta de demora en tiempo real", included: true },
        { name: "Recordatorios automáticos vía WhatsApp", included: false },
        { name: "Módulo de finanzas", included: false },
        { name: "Integración con MercadoPago", included: false },        
        { name: "Módulo de recomendaciones", included: false },
        { name: "Reportes personalizados", included: false },
        { name: "Catálogo de productos", included: false },        
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Profesional",
      basePrice: 15000,
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuración de horarios", included: true },
        { name: "Recordatorios manuales vía WhatsApp", included: true },
        { name: "Reprogramación de turnos", included: true },
        { name: "Link personalizado del negocio", included: true },
        { name: "Soporte y mantenimiento", included: true },
        { name: "Reservas fijas", included: true },
        { name: "Consulta de demora en tiempo real", included: true },
        { name: "Recordatorios automáticos vía WhatsApp", included: true },
        { name: "Módulo de finanzas", included: true },        
        { name: "Integración con MercadoPago", included: false },
        { name: "Módulo de recomendaciones", included: false },
        { name: "Reportes personalizados", included: false },
        { name: "Catálogo de productos", included: false },        
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Empresarial",
      basePrice: 18000,
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuración de horarios", included: true },
        { name: "Recordatorios manuales vía WhatsApp", included: true },
        { name: "Reprogramación de turnos", included: true },
        { name: "Link personalizado del negocio", included: true },
        { name: "Soporte y mantenimiento", included: true },
        { name: "Reservas fijas", included: true },
        { name: "Consulta de demora en tiempo real", included: true },
        { name: "Recordatorios automáticos vía WhatsApp", included: true },
        { name: "Módulo de finanzas", included: true },        
        { name: "Integración con MercadoPago", included: true },
        { name: "Módulo de recomendaciones", included: true },             
        { name: "Reportes personalizados", included: true },        
        { name: "Catálogo de productos", included: false },        
      ],
      buttonText: "Elegir Plan",
      highlighted: true,
    },
    {
      title: "Plan Premium",
      basePrice: null,
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuración de horarios", included: true },
        { name: "Recordatorios manuales vía WhatsApp", included: true },        
        { name: "Reprogramación de turnos", included: true },
        { name: "Link personalizado del negocio", included: true },
        { name: "Soporte y mantenimiento", included: true },
        { name: "Reservas fijas", included: true },
        { name: "Consulta de demora en tiempo real", included: true },
        { name: "Recordatorios automáticos vía WhatsApp", included: true },
        { name: "Módulo de finanzas", included: true },
        { name: "Integración con MercadoPago", included: true },
        { name: "Módulo de recomendaciones", included: true },
        { name: "Reportes personalizados", included: true },
        { name: "Catálogo de productos", included: true },
      ],
      buttonText: "Contactar",
    },
  ];

  const calculateTotalPrice = (basePrice, count) => {
    if (basePrice === null) return "Consultar";
    const additionalCost = (basePrice * 0.7) * (count - 1); // 70% del basePrice por cada profesional adicional
    return `$${(basePrice + additionalCost).toLocaleString("es-AR", {
      minimumFractionDigits: 0,
    })} / mes`;
  };

  const buildWhatsAppLink = (planTitle, count) => {
    const phone = "5493572674920"; // sin "+"
    const msg = `¡Hola! Quiero consultar por el ${planTitle} para ${count} ` +
                `profesional${count > 1 ? "es" : ""}.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };


  return (
    <section className="plans-container" id="plans">
      <motion.h2
        className="plans-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nuestros Planes
      </motion.h2>
      <motion.div
        className="plans-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`plan-card ${plan.highlighted ? "highlighted" : ""}`}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 15px rgba(0, 74, 173, 0.2)" }}
            tabIndex={0}
            aria-describedby={`plan-description-${index}`}
          >
            {plan.highlighted && (
              <span className="corner-ribbon" aria-hidden="true">Recomendado</span>
            )}
            <div className="plan-header">
              <h3 className="plan-title">{plan.title}</h3>
            </div>
            <div className="plan-price-container">
              <p className="plan-price">{calculateTotalPrice(plan.basePrice, professionalCount)}</p>
              <div className="professional-counter">
                <button
                  onClick={() => setProfessionalCount(Math.max(1, professionalCount - 1))}
                  aria-label="Disminuir cantidad de profesionales"
                >
                  <FaMinus />
                </button>
                <span>{professionalCount} Profesional{professionalCount > 1 ? "es" : ""}</span>
                <button
                  onClick={() => setProfessionalCount(professionalCount + 1)}
                  aria-label="Aumentar cantidad de profesionales"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <motion.ul
              className="plan-features"
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {plan.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="plan-feature"
                  variants={featureVariants}
                >
                  <span className="icon-container">
                    {feature.included ? (
                      <FaCheck className="check-icon" aria-label="Característica incluida" />
                    ) : (
                      <FaTimes className="times-icon" aria-label="Característica no incluida" />
                    )}
                  </span>
                  <span className={feature.included ? "" : "strikethrough"}>
                    {feature.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              href={buildWhatsAppLink(plan.title, professionalCount)}
              target="_blank"
              rel="noopener noreferrer"
              className="plan-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              aria-label={`Elegir ${plan.title}`}
            >
              {plan.buttonText}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default Plans;