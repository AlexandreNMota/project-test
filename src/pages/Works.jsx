import React, { useState, useEffect } from "react";
import victory from "../img/tech.png";
import nowak from "../img/consultoria.png";
import metiew from "../img/treinamento.png";
import prev from "../components/icons/prev.svg";
import next from "../components/icons/next.svg";
const Works = ({ isDisabled }) => {
  const works = [
    {
      image: victory,
      title: "Desenvolvimento de Software",
      description:
        "Desenvolvemos soluções de software personalizadas para atender às suas necessidades específicas, garantindo eficiência e qualidade.",
    },
    {
      image: nowak,
      title: "Consultoria",
      description:
        "Oferecemos consultoria especializada em tecnologia para ajudar sua empresa a tomar decisões informadas e estratégicas sobre suas necessidades de TI.",
    },
    {
      image: metiew,
      title: "Treinamento",
      description:
        "Fornecemos treinamento abrangente para capacitar sua equipe a utilizar eficazmente as soluções tecnológicas implementadas, maximizando o retorno do investimento.",
    },
  ];

  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  const handleSliderClick = (isNext) => {
    if (isNext) {
      setCurrentWorkIndex((currentWorkIndex + 1) % works.length);
    } else {
      setCurrentWorkIndex((currentWorkIndex - 1 + works.length) % works.length);
    }
  };

  useEffect(() => {
    const sliderItems = document.querySelectorAll(".slider--item");

    sliderItems.forEach((item, index) => {
      item.style.opacity = 0;
    });

    setTimeout(() => {
      sliderItems.forEach((item) => {
        item.style.opacity = 1;
      });
    }, 400);
  }, [currentWorkIndex]);

  const currentWork = works[currentWorkIndex];

  return (
    <div className="work">
      {/* <h2>Serviço</h2> */}
      <div className="work--lockup">
        <ul className="slider">
          {works.map((work, index) => (
            <li
              key={index}
              className={`slider--item ${
                index === currentWorkIndex ? "slider--item-center" : ""
              } ${
                index === (currentWorkIndex - 1 + works.length) % works.length
                  ? "slider--item-left"
                  : ""
              } ${
                index === (currentWorkIndex + 1) % works.length
                  ? "slider--item-right"
                  : ""
              }`}
            >
              <a href="#0">
                <div className="slider--item-image">
                  <img src={work.image} alt={work.title} />
                </div>
                <p className="slider--item-title">{work.title}</p>
                <p
                  className="slider--item-description"
                  style={{ fontSize: "12px" }}
                >
                  {work.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <button
          className="slider--prev"
          onClick={() => handleSliderClick(false)}
          disabled={isDisabled}
          style={{ boxShadow: "none", border: "none" }}
        >
          <div
            style={{
              width: "15px", // Defina a largura da div conforme necessário
              height: "15px", // Defina a altura da div conforme necessário
              backgroundImage: `url("${prev}")`, // Use a variável seta para a imagem de fundo
              backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </button>
        <button
          className="slider--next"
          onClick={() => handleSliderClick(true)}
          disabled={isDisabled}
          style={{ boxShadow: "none", border: "none" }}
        >
          <div
            style={{
              width: "15px", // Defina a largura da div conforme necessário
              height: "15px", // Defina a altura da div conforme necessário
              backgroundImage: `url("${next}")`, // Use a variável seta para a imagem de fundo
              backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Works;
