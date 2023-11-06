import seta from "../components/icons/seta.svg";
import visual from "../img/about-visual.png";
const About = ({ isDisabled }) => {
  return (
    <div className={`about ${isDisabled ? "disable-hover" : ""}`}>
      <div className="about--banner">
        <h2>
          We
          <br />
          believe in
          <br />
          passionate
          <br />
          people
        </h2>
        <a href="#0" style={{ display: "flex" }}>
          Career
          <span style={{ display: "flex" }}>
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
          </span>
        </a>
        <img src={visual} alt="About Us" />
      </div>
      <div className="about--options">
        <a href="#0">
          <h3>Winners</h3>
        </a>
        <a href="#0">
          <h3>Philosophy</h3>
        </a>
        <a href="#0">
          <h3>History</h3>
        </a>
      </div>
    </div>
  );
};
export default About;
