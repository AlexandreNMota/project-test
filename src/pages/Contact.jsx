import { useEffect } from "react";

const Contact = ({ isDisabled }) => {
  useEffect(() => {
    console.log(isDisabled);
  }, [isDisabled]);
  return (
    <div className="contact">
      <div className="contact--lockup">
        <div className="modal">
          <div className="modal--information">
            <p>R. Francisco Rocha, 198 - Curitiba, Brasil</p>
            <a href="mailto:codecasebr@gmail.com">codecasebr@gmail.com</a>
            <a href="tel:+5541984832429">+55 41 98483-2429</a>
          </div>
          <ul className="modal--options">
            <li>
              {isDisabled ? <span>Instagram</span> : <a href="#0">Instagram</a>}
            </li>
            <li>
              {isDisabled ? (
                <span>Entre em contato</span>
              ) : (
                <a href="mailto:codecasebr@gmail.com">Entre em contato</a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
