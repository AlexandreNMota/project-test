import React, { useState } from "react";
const OuterNavItem = ({ title, isInitiallyActive = false }) => {
  const [isActive, setIsActive] = useState(isInitiallyActive);

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      // Adicione chamadas para suas funções updateNavs() e updateContent() aqui, se necessário.
    }
  };

  return (
    <li className={isActive ? "is-active" : ""} onClick={handleClick}>
      {title}
    </li>
  );
};

export default OuterNavItem;
