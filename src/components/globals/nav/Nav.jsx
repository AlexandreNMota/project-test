import React, { useState } from "react";
import NavItem from "./NavItem";
const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <nav className="l-side-nav">
      <ul className="side-nav">
        <NavItem
          title="Home"
          index={0}
          isActive={activeIndex === 0}
          onItemClick={handleItemClick}
        />
        <NavItem
          title="Works"
          index={1}
          isActive={activeIndex === 1}
          onItemClick={handleItemClick}
        />
        <NavItem
          title="About"
          index={2}
          isActive={activeIndex === 2}
          onItemClick={handleItemClick}
        />
        <NavItem
          title="Contact"
          index={3}
          isActive={activeIndex === 3}
          onItemClick={handleItemClick}
        />
        <NavItem
          title="Hire Us"
          index={4}
          isActive={activeIndex === 4}
          onItemClick={handleItemClick}
        />
      </ul>
    </nav>
  );
};
export default Nav;
