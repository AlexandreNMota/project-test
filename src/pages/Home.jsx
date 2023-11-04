import React, { useEffect } from "react";
import seta from "../components/icons/seta.svg";
import imagem from "../img/introduction-visual.png";
const Home = () => {
  useEffect(() => {
    console.log("Home");
  }, []);

  return (
    <div className="intro">
      <div className="intro--banner">
        <h1>
          Your next
          <br />
          interactive
          <br />
          experience
        </h1>
        <button className="cta">
          Hire Us
          <div
            style={{
              width: "20px", // Defina a largura da div conforme necessário
              height: "20px", // Defina a altura da div conforme necessário
              backgroundImage: `url("${seta}")`, // Use a variável seta para a imagem de fundo
              backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
              backgroundRepeat: "no-repeat", // Evita a repetição da imagem
            }}
          ></div>
          <span className="btn-background"></span>
        </button>
        <img src={imagem} alt="Welcome" />
      </div>
      <div className="intro--options">
        <a href="#0">
          <h3>Metiew &amp; Smith</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
          </p>
        </a>
        <a href="#0">
          <h3>Fantasy interactive</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
          </p>
        </a>
        <a href="#0">
          <h3>Paul &amp; shark</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
          </p>
        </a>
      </div>
    </div>
  );
};
export default Home;
