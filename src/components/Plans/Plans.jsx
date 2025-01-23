import React from "react";
import "./Plans.css";

function Plans() {
  const plans = [
    {
      title: "Plan Básico",
      price: "$9.99 / mes",
      features: [
        "Gestión de citas ilimitadas",
        "Notificaciones por correo electrónico",
        "Soporte básico",
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Pro",
      price: "$19.99 / mes",
      features: [
        "Todas las funciones del Plan Básico",
        "Recordatorios SMS",
        "Integración con calendario externo",
        "Soporte prioritario",
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Empresarial",
      price: "$49.99 / mes",
      features: [
        "Todo incluido en Plan Pro",
        "Múltiples usuarios",
        "Análisis y reportes avanzados",
        "Soporte dedicado 24/7",
      ],
      buttonText: "Elegir Plan",
    },
    {
      title: "Plan Personalizado",
      price: "A medida",
      features: [
        "Soluciones adaptadas a tus necesidades",
        "Desarrollo personalizado",
        "Consultoría profesional",
      ],
      buttonText: "Contactar",
    },
  ];

  return (
    <div className="plans-container" id="plans">
      <h2 className="plans-title">Nuestros Planes</h2>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="plan-feature">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="plan-button">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
