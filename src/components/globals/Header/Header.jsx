import logo from "../../../img/logo.png";
const Header = ({
  perspectiveClassName,
  setPerspectiveClassName,
  setNextPos,
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
  return (
    <header className="header">
      <a className="header--logo" href="#0">
        <img src={logo} alt="Global" />

        <p>Global</p>
      </a>
      <button className="header--cta cta" onClick={hireUs}>
        Hire Us
      </button>
      <div className="header--nav-toggle" onClick={changePerspective}>
        <span></span>
      </div>
    </header>
  );
};
export default Header;
