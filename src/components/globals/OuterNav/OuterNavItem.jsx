import React, { useState, useEffect } from "react";

const OuterNavItem = ({
  title,
  isInitiallyActive,
  perspectiveClassName,
  setPerspectiveClassName,
  itemAtivo,
  setNextPos,
}) => {
  const [isActive, setIsActive] = useState(isInitiallyActive);
  const [classOuterNavItem, setClassItem] = useState("");

  useEffect(() => {
    console.log("Item Ativo", title, itemAtivo, isInitiallyActive);
  }, [itemAtivo]);
  useEffect(() => {
    if (
      perspectiveClassName ===
      "perspective effect-rotate-left perspective--modalview effect-rotate-left--animate"
    ) {
      if (isInitiallyActive) {
        setClassItem("is-active is-vis");
      } else {
        setClassItem("is-vis");
      }
    } else {
      setClassItem("");
    }
  }, [perspectiveClassName, isInitiallyActive]);

  const handleClick = () => {
    setNextPos(itemAtivo);
    setPerspectiveClassName(
      "perspective effect-rotate-left perspective--modalview"
    );
    setTimeout(() => {
      setPerspectiveClassName("perspective effect-rotate-left");
    }, 400);
  };

  return (
    <li className={classOuterNavItem} onClick={handleClick}>
      {title}
    </li>
  );
};

export default OuterNavItem;
