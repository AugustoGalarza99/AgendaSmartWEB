import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Íconos para expandir/contraer
import "./Faq.css";

function FAQ() {
  // Preguntas frecuentes con sus respuestas
  const faqs = [
    {
      question: "¿Qué es AgendaSmart?",
      answer:
        "AgendaSmart es una solución digital diseñada para ayudarte a organizar tus tareas, citas y proyectos de manera eficiente y sencilla.",
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
  ];

  const [openIndex, setOpenIndex] = useState(null); // Control del acordeón

  // Función para manejar el estado abierto/cerrado de las preguntas
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id="faq">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="faq-icon" />
              ) : (
                <FaChevronDown className="faq-icon" />
              )}
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
