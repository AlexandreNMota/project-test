import React, { useEffect } from "react";
import seta from "../components/icons/seta.svg";
import imagem from "../img/introduction-visual.png";
const Home = ({ setNextPos, isDisabled }) => {
  const hireUs = () => {
    setNextPos(4);
  };
  return (
    <div className="intro">
      <div className="intro--banner">
        <h1>
          Inovação
          <br />
          com
          <br />
          tecnologia
        </h1>
        <button
          className="cta"
          style={{ display: "flex", alignItems: "center" }}
          onClick={hireUs}
          disabled={isDisabled}
        >
          Solicite um orçamento
          <div
            style={{
              width: "15px", // Defina a largura da div conforme necessário
              height: "15px", // Defina a altura da div conforme necessário
              backgroundImage: `url("${seta}")`, // Use a variável seta para a imagem de fundo
              backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
              backgroundRepeat: "no-repeat",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <span className="btn-background"></span>
        </button>
        <img src={imagem} alt="Welcome" />
      </div>
      <div className="intro--options">
        <a href="#0">
          <h3>Inovação tecnológica</h3>
          <p>
            Na CodeCase, transformamos paixão por tecnologia em soluções
            inovadoras que impulsionam seu sucesso.
          </p>
        </a>
        <a href="#0">
          <h3>Qualidade na entrega</h3>
          <p>
            Nosso compromisso com a excelência garante que cada entrega seja
            impecável, excedendo suas expectativas.
          </p>
        </a>
        <a href="#0">
          <h3>Segurança para o cliente</h3>
          <p>
            Priorizamos a segurança de nossos clientes em cada etapa, garantindo
            tranquilidade e confiança em nossos serviços.
          </p>
        </a>
      </div>
    </div>
  );
};
export default Home;
