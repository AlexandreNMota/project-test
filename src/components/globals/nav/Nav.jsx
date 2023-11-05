import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
const Nav = ({ setCurPos, setNextPos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setCurPos(activeIndex);
    setNextPos(activeIndex);
  }, [activeIndex]);

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
