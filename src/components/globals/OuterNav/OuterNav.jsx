import React, { useEffect, useState } from "react";
import OuterNavItem from "./OuterNavItem";
const OuterNav = ({
  perspectiveClassName,
  setPerspectiveClassName,
  initialActiveItem,
  setNextPos,
}) => {
  const [itemAtivo, setItemAtivo] = useState(initialActiveItem);
  useEffect(() => {
    setItemAtivo(initialActiveItem);
  }, [initialActiveItem]);
  // useEffect(() => {
  //   console.log(itemAtivo, "Item aativo");
  // }, [itemAtivo]);
  const classOuterNav =
    perspectiveClassName !==
    "perspective effect-rotate-left perspective--modalview effect-rotate-left--animate"
      ? "outer-nav"
      : "outer-nav is-vis";
  return (
    <ul className={classOuterNav}>
      <OuterNavItem
        title="Home"
        isInitiallyActive={itemAtivo === 0}
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
      />
      <OuterNavItem
        title="Works"
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        isInitiallyActive={itemAtivo === 1}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
      />
      <OuterNavItem
        title="About"
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        isInitiallyActive={itemAtivo === 2}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
      />
      <OuterNavItem
        title="Contact"
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        isInitiallyActive={itemAtivo === 3}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
      />
      <OuterNavItem
        title="Hire us"
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        isInitiallyActive={itemAtivo === 4}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
      />
    </ul>
  );
};
export default OuterNav;
