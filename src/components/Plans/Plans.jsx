import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Importamos framer-motion
import { FaCheck, FaTimes } from "react-icons/fa"; // Agregamos los íconos de check y times
import "./Plans.css";

function Plans() {
  const plans = [
    {
      title: "Plan Nivel 1",
      price: "$7.0000 / mes",
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuracion de horarios", included: true },
        { name: "Recordatorios via Whatsapp", included: true },
        { name: "Reprogramacion de turnos", included: true },
        { name: "Link personalizado con el nombre de tu negocio", included: true },
        { name: "Soporte y mantenimiento de la APP", included: true },
        { name: "Consulta en tiempo real de la demora", included: false },
        { name: "Centro de control", included: false },
        { name: "Modulo de finanzas y turnos", included: false },
        { name: "Catalogo de productos", included: false },
        { name: "Consultoria profesional", included: false },
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Nivel 2",
      price: "$10.000 / mes",
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuracion de horarios", included: true },
        { name: "Recordatorios via Whatsapp", included: true },
        { name: "Reprogramacion de turnos", included: true },
        { name: "Link personalizado con el nombre de tu negocio", included: true },
        { name: "Soporte y mantenimiento de la APP", included: true },
        { name: "Consulta en tiempo real de la demora", included: true },
        { name: "Centro de control", included: false },
        { name: "Modulo de finanzas y turnos", included: false },
        { name: "Catalogo de productos", included: false },
        { name: "Consultoria profesional", included: false },
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Nivel 3",
      price: "$13.000 / mes",
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuracion de horarios", included: true },
        { name: "Recordatorios via Whatsapp", included: true },
        { name: "Reprogramacion de turnos", included: true },
        { name: "Link personalizado con el nombre de tu negocio", included: true },
        { name: "Soporte y mantenimiento de la APP", included: true },
        { name: "Consulta en tiempo real de la demora", included: true },
        { name: "Centro de control", included: true },
        { name: "Modulo de finanzas y turnos", included: true },
        { name: "Catalogo de productos", included: false },
        { name: "Consultoria profesional", included: false },
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Nivel 4",
      price: "Consultar",
      features: [
        { name: "Agenda digital", included: true },
        { name: "Turnos ilimitados", included: true },
        { name: "Servicios ilimitados", included: true },
        { name: "Configuracion de horarios", included: true },
        { name: "Recordatorios via Whatsapp", included: true },
        { name: "Reprogramacion de turnos", included: true },
        { name: "Link personalizado con el nombre de tu negocio", included: true },
        { name: "Soporte y mantenimiento de la APP", included: true },
        { name: "Consulta en tiempo real de la demora", included: true },
        { name: "Centro de control", included: true },
        { name: "Modulo de finanzas y turnos", included: true },
        { name: "Catalogo de productos", included: true },
        { name: "Consultoria profesional", included: true },
      ],
      buttonText: "Contactar",
    },
  ];

  return (
    <div className="plans-container" id="plans">
      <h2 className="plans-title">Nuestros Planes</h2>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <motion.div
          key={index}
          className="plan-card"
          initial={{ opacity: 0, y: 50 }} // Oculto antes de aparecer
          whileInView={{ opacity: 1, y: 0 }} // Aparece en el scroll
          exit={{ opacity: 0, y: 50 }} // Se oculta si sale de vista
          viewport={{ once: true, amount: 0.5 }} // Se activa cuando el 30% sea visible
          transition={{ duration: 0.6, delay: index * 0.2 }} // Efecto progresivo
        >

            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="plan-feature">
                  {feature.included ? (
                    <>
                      <FaCheck className="check-icon" />
                      {feature.name}
                    </>
                  ) : (
                    <>
                      <FaTimes className="times-icon" />
                      <span className="strikethrough">{feature.name}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/3572674920"
              target="_blank"
              rel="noopener noreferrer"
              className="plan-button"
            >
              {plan.buttonText}
            </a>
            </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
