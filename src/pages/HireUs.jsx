import check from "../components/icons/check.svg";
const HireUs = ({ isDisabled }) => {
  return (
    <div className="hire">
      <h2>O que você deseja?</h2>
      <form className="work-request">
        <div className="work-request--options">
          <span className="options-a">
            <input
              id="opt-1"
              type="checkbox"
              value="app design"
              disabled={isDisabled}
            />
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
            <input
              id="opt-2"
              type="checkbox"
              value="graphic design"
              disabled={isDisabled}
            />
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
            <input
              id="opt-3"
              type="checkbox"
              value="motion design"
              disabled={isDisabled}
            />
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
            <input
              id="opt-4"
              type="checkbox"
              value="ux design"
              disabled={isDisabled}
            />
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
            <input
              id="opt-5"
              type="checkbox"
              value="webdesign"
              disabled={isDisabled}
            />
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
            <input
              id="opt-6"
              type="checkbox"
              value="marketing"
              disabled={isDisabled}
            />
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
            <input
              id="name"
              type="text"
              spellcheck="false"
              disabled={isDisabled}
            />
            <label for="name">Nome</label>
          </div>
          <div className="information-email">
            <input
              id="email"
              type="email"
              spellcheck="false"
              disabled={isDisabled}
            />
            <label for="email">Email</label>
          </div>
        </div>
        <input
          type="submit"
          value="Solicitar orçamento"
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};
export default HireUs;
