import logo from "../../../img/logo.png";
const Header = ({
  perspectiveClassName,
  setPerspectiveClassName,
  setNextPos,
  isDisabled,
}) => {
  const changePerspective = () => {
    if (perspectiveClassName === "perspective effect-rotate-left") {
      setPerspectiveClassName(
        "perspective effect-rotate-left perspective--modalview effect-rotate-left--animate"
      );
    } else {
      setPerspectiveClassName(
        "perspective effect-rotate-left perspective--modalview"
      );
      setTimeout(() => {
        setPerspectiveClassName("perspective effect-rotate-left");
      }, 400);
    }
  };

  const hireUs = () => {
    setNextPos(4);
  };

  const goHome = (e) => {
    e.preventDefault();
    setNextPos(0);
  };
  return (
    <header className="header">
      <a
        className="header--logo"
        href="#0"
        onClick={(e) => {
          goHome(e);
        }}
      >
        <img src={logo} alt="Global" />
      </a>
      <button
        className="header--cta cta"
        onClick={hireUs}
        disabled={isDisabled}
      >
        Solicite um orçamento
      </button>
      <button
        className="header--nav-toggle"
        onClick={changePerspective}
        disabled={isDisabled}
        style={{
          boxShadow: "none",
          border: "none",
          backgroundColor: "transparent",
        }}
      >
        <span></span>
      </button>
    </header>
  );
};
export default Header;
