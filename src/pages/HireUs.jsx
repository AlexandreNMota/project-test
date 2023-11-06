import check from "../components/icons/check.svg";
const HireUs = () => {
  return (
    <div className="hire">
      <h2>You want us to do</h2>
      <form className="work-request">
        <div className="work-request--options">
          <span className="options-a">
            <input id="opt-1" type="checkbox" value="app design" />
            <label
              for="opt-1"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "20px", // Defina a largura da div conforme necessário
                  height: "20px", // Defina a altura da div conforme necessário
                  backgroundImage: `url("${check}")`, // Use a variável seta para a imagem de fundo
                  backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              App Design
            </label>
            <input id="opt-2" type="checkbox" value="graphic design" />
            <label
              for="opt-2"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "20px", // Defina a largura da div conforme necessário
                  height: "20px", // Defina a altura da div conforme necessário
                  backgroundImage: `url("${check}")`, // Use a variável seta para a imagem de fundo
                  backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              Graphic Design
            </label>
            <input id="opt-3" type="checkbox" value="motion design" />
            <label
              for="opt-3"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "20px", // Defina a largura da div conforme necessário
                  height: "20px", // Defina a altura da div conforme necessário
                  backgroundImage: `url("${check}")`, // Use a variável seta para a imagem de fundo
                  backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              Motion Design
            </label>
          </span>
          <span className="options-b">
            <input id="opt-4" type="checkbox" value="ux design" />
            <label
              for="opt-4"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "20px", // Defina a largura da div conforme necessário
                  height: "20px", // Defina a altura da div conforme necessário
                  backgroundImage: `url("${check}")`, // Use a variável seta para a imagem de fundo
                  backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              UX Design
            </label>
            <input id="opt-5" type="checkbox" value="webdesign" />
            <label
              for="opt-5"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "20px", // Defina a largura da div conforme necessário
                  height: "20px", // Defina a altura da div conforme necessário
                  backgroundImage: `url("${check}")`, // Use a variável seta para a imagem de fundo
                  backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              Webdesign
            </label>
            <input id="opt-6" type="checkbox" value="marketing" />
            <label
              for="opt-6"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "20px", // Defina a largura da div conforme necessário
                  height: "20px", // Defina a altura da div conforme necessário
                  backgroundImage: `url("${check}")`, // Use a variável seta para a imagem de fundo
                  backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              Marketing
            </label>
          </span>
        </div>
        <div className="work-request--information">
          <div className="information-name">
            <input id="name" type="text" spellcheck="false" />
            <label for="name">Name</label>
          </div>
          <div className="information-email">
            <input id="email" type="email" spellcheck="false" />
            <label for="email">Email</label>
          </div>
        </div>
        <input type="submit" value="Send Request" />
      </form>
    </div>
  );
};
export default HireUs;
