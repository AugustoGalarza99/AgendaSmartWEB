import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Íconos para expandir/contraer
import faqImage from "../../assets/faq.png"
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
      question: "¿Es realmente una aplicacion propia?",
      answer:
        "Asi es, creamos y configuramos tu propia aplicacion en muy poco tiempo para que puedas mejorar los rendimientos de tu negocio.",
    },
    {
      question: "¿Puedo agregar mas funciones al sistema?",
      answer:
        "Si es posible, todas las nuevas funciones seran analizadas y cotizadas segun lo que sea acordado.",
    },
    {
      question: "¿Debo descargar algo o mis clientes?",
      answer:
        "No debes descargar nada ya que el sistema funciona desde un navegador web, ingresas al link y tienes acceso a todo.",
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
      question: "¿Qué informacion debo brindar?",
      answer:
        "El cliente debera proporcionar toda la informacion necesaria para completar el diseño del logo, colores de la aplicacion y carga de datos.",
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
      <div className="faq-content">
        <div className="faq-image">
          <img src={faqImage} alt="Imagen FAQ" />
        </div>
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
    </div>
  );
}

export default FAQ;
