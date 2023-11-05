import logo from "../../../img/logo.png";
const Header = ({ perspectiveClassName, setPerspectiveClassName }) => {
  const changePerspective = () => {
    if (perspectiveClassName === "perspective effect-rotate-left") {
      setPerspectiveClassName(
        "perspective effect-rotate-left perspective--modalview effect-rotate-left--animate"
      );
    } else {
      setPerspectiveClassName("perspective effect-rotate-left");
    }
  };
  return (
    <header className="header">
      <a className="header--logo" href="#0">
        <img src={logo} alt="Global" />
        <logo />
        <p>Global</p>
      </a>
      <button className="header--cta cta">Hire Us</button>
      <div className="header--nav-toggle" onClick={changePerspective}>
        <span></span>
      </div>
    </header>
  );
};
export default Header;
