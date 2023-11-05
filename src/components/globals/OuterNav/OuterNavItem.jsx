import React, { useState, useEffect } from "react";
const OuterNavItem = ({
  title,
  isInitiallyActive = false,
  perspectiveClassName,
}) => {
  const [isActive, setIsActive] = useState(isInitiallyActive);
  const [classOuterNavItem, setClassItem] = useState("");

  useEffect(() => {
    if (
      perspectiveClassName ===
      "perspective effect-rotate-left perspective--modalview effect-rotate-left--animate"
    ) {
      if (isActive) {
        setClassItem("is-active is-vis");
      } else {
        setClassItem("is-vis");
      }
    } else {
      setClassItem("");
    }
  }, [perspectiveClassName]);
  // const classOuterNavItem =
  //   perspectiveClassName !==
  //   "perspective effect-rotate-left perspective--modalview effect-rotate-left--animate"
  //     ? ""
  //     : "is-vis";
  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  return (
    // <li className={isActive ? "is-active" : ""} onClick={handleClick}>
    <li className={classOuterNavItem} onClick={handleClick}>
      {title}
    </li>
  );
};

export default OuterNavItem;
