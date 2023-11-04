import logo from "../../../img/logo.png";
const Header = () => {
  return (
    <header className="header">
      <a className="header--logo" href="#0">
        <img src={logo} alt="Global" />
        <logo />
        <p>Global</p>
      </a>
      <button className="header--cta cta">Hire Us</button>
      <div className="header--nav-toggle">
        <span></span>
      </div>
    </header>
  );
};
export default Header;