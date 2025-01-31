import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Estilos base
import "slick-carousel/slick/slick-theme.css"; // Tema de slick-carousel
import "./Carousel.css"; // Nuestro CSS personalizado

// Imágenes del carrusel
import image1 from "../../assets/fotobanner1.png";
import image2 from "../../assets/fotobanner2.png";
import image3 from "../../assets/fotobanner3.png";
import image4 from "../../assets/fotobanner4.png";
import image5 from "../../assets/fotobanner5.png";
import image6 from "../../assets/fotobanner6.png";
import image7 from "../../assets/fotobanner7.png";
import image8 from "../../assets/fotobanner8.png";
import image9 from "../../assets/fotobanner9.png";
import image10 from "../../assets/fotobanner10.png";

function Carousel() {
  // Configuración del carrusel
  const settings = {
    dots: true, // Mostrar indicadores de navegación
    infinite: true, // Ciclo infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Mostrar 4 imágenes en escritorio
    slidesToScroll: 1, // Avanza una imagen por vez
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Teléfonos
        settings: {
          slidesToShow: 1,
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
    <div className="carousel-container" id="carousel">
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
        <div className="carousel-slide">
          <img src={image6} alt="Apartado 6" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image7} alt="Apartado 7" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image8} alt="Apartado 8" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image9} alt="Apartado 9" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={image10} alt="Apartado 10" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
