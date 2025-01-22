import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Estilos base
import "slick-carousel/slick/slick-theme.css"; // Tema de slick-carousel
import "./Carousel.css"; // Nuestro CSS personalizado

// Imágenes del carrusel
import image1 from "../../assets/1.png";
import image2 from "../../assets/1.png";
import image3 from "../../assets/1.png";
import image4 from "../../assets/1.png";
import image5 from "../../assets/1.png";

function Carousel() {
  // Configuración del carrusel
  const settings = {
    dots: true, // Mostrar indicadores de navegación
    infinite: true, // Ciclo infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 4, // Mostrar 4 imágenes en escritorio
    slidesToScroll: 1, // Avanza una imagen por vez
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Teléfonos
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Explora nuestra App</h2>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={image1} alt="Apartado 1" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image2} alt="Apartado 2" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image3} alt="Apartado 3" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image4} alt="Apartado 4" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image5} alt="Apartado 5" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
