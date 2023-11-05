import React, { useState } from "react";
import OuterNavItem from "./OuterNavItem";
const OuterNav = ({ perspectiveClassName }) => {
  const classOuterNav =
    perspectiveClassName !==
    "perspective effect-rotate-left perspective--modalview effect-rotate-left--animate"
      ? "outer-nav"
      : "outer-nav is-vis";
  return (
    <ul className={classOuterNav}>
      <OuterNavItem
        title="Home"
        isInitiallyActive={true}
        perspectiveClassName={perspectiveClassName}
      />
      <OuterNavItem title="Works" perspectiveClassName={perspectiveClassName} />
      <OuterNavItem title="About" perspectiveClassName={perspectiveClassName} />
      <OuterNavItem
        title="Contact"
        perspectiveClassName={perspectiveClassName}
      />
      <OuterNavItem
        title="Hire us"
        perspectiveClassName={perspectiveClassName}
      />
    </ul>
  );
};
export default OuterNav;
