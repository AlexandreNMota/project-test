import victory from "../img/work-victory.jpg";
import nowak from "../img/work-alex-nowak.jpg";
import metiew from "../img/work-metiew-smith.jpg";
import prev from "../components/icons/prev.svg";
import next from "../components/icons/next.svg";
const Works = () => {
  return (
    <div className="work">
      <h2>Selected work</h2>
      <div className="work--lockup">
        <ul className="slider">
          <li className="slider--item slider--item-left">
            <a href="#0">
              <div className="slider--item-image">
                <img src={victory} alt="Welcome" />
              </div>
              <p className="slider--item-title">Victory</p>
              <p className="slider--item-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
              </p>
            </a>
          </li>
          <li className="slider--item slider--item-center">
            <a href="#0">
              <div className="slider--item-image">
                <img src={nowak} alt="Welcome" />
              </div>
              <p className="slider--item-title">Metiew &amp; Smith</p>
              <p className="slider--item-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
              </p>
            </a>
          </li>
          <li className="slider--item slider--item-rightslider--item slider--item-right">
            <a href="#0">
              <div className="slider--item-image">
                <img src={metiew} alt="Welcome" />
              </div>
              <p className="slider--item-title">Alex Nowak</p>
              <p className="slider--item-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
              </p>
            </a>
          </li>
        </ul>
        <div className="slider--prev">
          <div
            style={{
              width: "15px", // Defina a largura da div conforme necessário
              height: "15px", // Defina a altura da div conforme necessário
              backgroundImage: `url("${prev}")`, // Use a variável seta para a imagem de fundo
              backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="slider--next">
          <div
            style={{
              width: "15px", // Defina a largura da div conforme necessário
              height: "15px", // Defina a altura da div conforme necessário
              backgroundImage: `url("${next}")`, // Use a variável seta para a imagem de fundo
              backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Works;
