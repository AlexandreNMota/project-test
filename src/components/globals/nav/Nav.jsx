import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
const Nav = ({ setCurPos, setNextPos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = 4; // Update this with the total number of sections
  const minIndex = 0;
  useEffect(() => {
    setCurPos(activeIndex);
    setNextPos(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = (event) => {
      const deltaY = event.deltaY;

      if (deltaY > 0) {
        // Scrolled down
        if (activeIndex === maxIndex) {
          setActiveIndex(minIndex); // Loop to the first item
        } else {
          setActiveIndex(activeIndex + 1);
        }
      } else if (deltaY < 0) {
        // Scrolled up
        if (activeIndex === minIndex) {
          return; // Do nothing if on the first item
        } else {
          setActiveIndex(activeIndex - 1);
        }
      }
    };

    // Add wheel event listener for scrolling
    window.addEventListener("wheel", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeIndex, maxIndex, minIndex]);

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
