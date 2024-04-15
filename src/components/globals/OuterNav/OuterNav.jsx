import React, { useEffect, useState } from "react";
import OuterNavItem from "./OuterNavItem";
const OuterNav = ({
  perspectiveClassName,
  setPerspectiveClassName,
  initialActiveItem,
  setNextPos,
  nextPos,
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
        title="Início"
        isInitiallyActive={itemAtivo === 0}
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
        nextPos={nextPos}
        item={0}
      />
      <OuterNavItem
        title="Serviços"
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        isInitiallyActive={itemAtivo === 1}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
        nextPos={nextPos}
        item={1}
      />
      <OuterNavItem
        title="Sobre nós"
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        isInitiallyActive={itemAtivo === 2}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
        nextPos={nextPos}
        item={2}
      />
      <OuterNavItem
        title="Contato"
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        isInitiallyActive={itemAtivo === 3}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
        nextPos={nextPos}
        item={3}
      />
      <OuterNavItem
        title="Orçamento"
        perspectiveClassName={perspectiveClassName}
        setPerspectiveClassName={setPerspectiveClassName}
        isInitiallyActive={itemAtivo === 4}
        itemAtivo={itemAtivo}
        setNextPos={setNextPos}
        nextPos={nextPos}
        item={4}
      />
    </ul>
  );
};
export default OuterNav;
