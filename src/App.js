// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/globals/Header/Header";
import Nav from "./components/globals/nav/Nav";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HireUs from "./pages/HireUs";
import DeviceNotification from "./components/globals/DeviceNotification/DeviceNotification";
import OuterNav from "./components/globals/OuterNav/OuterNav";
import "./css/main.sass";
import "./css/main.css";

function App() {
  const [perspectiveClassName, setPerspectiveClassName] = useState(
    "perspective effect-rotate-left"
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const [curPos, setCurPos] = useState(0);
  const [nextPos, setNextPos] = useState(0);
  const lastItem = 4; // Atualize este valor de acordo com o número de seções

  useEffect(() => {
    if (perspectiveClassName !== "perspective effect-rotate-left") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [perspectiveClassName]);
  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    const sections = mainContent.querySelectorAll(".section");

    sections.forEach((section, index) => {
      section.classList.remove("section--is-active");
      section.classList.remove("section--next");
      section.classList.remove("section--prev");

      if (index === nextPos) {
        section.classList.add("section--is-active");
      } else if (curPos < nextPos) {
        section.classList.add("section--next");
      } else {
        section.classList.add("section--prev");
      }
    });

    const headerCta = document.querySelector(".header--cta");
    if (nextPos !== 0 && nextPos !== lastItem) {
      headerCta.classList.add("is-active");
    } else {
      headerCta.classList.remove("is-active");
    }
  }, [curPos, nextPos, lastItem]);

  return (
    <>
      <DeviceNotification />
      <div className={perspectiveClassName}>
        <div className="container">
          <div className="outer-nav--return"></div>
          <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
              <Header
                setPerspectiveClassName={setPerspectiveClassName}
                perspectiveClassName={perspectiveClassName}
                setNextPos={setNextPos}
                isDisabled={isDisabled}
              />
              <Nav
                setCurPos={setCurPos}
                setNextPos={setNextPos}
                nextPos={nextPos}
                perspectiveClassName={perspectiveClassName}
                isDisabled={isDisabled}
              />
              <ul className="l-main-content main-content">
                <li className="l-section section section--is-active">
                  <Home setNextPos={setNextPos} isDisabled={isDisabled} />
                </li>
                <li className="l-section section ">
                  <Works isDisabled={isDisabled} />
                </li>
                <li className="l-section section">
                  <About isDisabled={isDisabled} />
                </li>
                <li className="l-section section">
                  <Contact isDisabled={isDisabled} />
                </li>
                <li className="l-section section">
                  <HireUs isDisabled={isDisabled} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <OuterNav
          perspectiveClassName={perspectiveClassName}
          setPerspectiveClassName={setPerspectiveClassName}
          initialActiveItem={nextPos}
          setNextPos={setNextPos}
          nextPos={nextPos}
        />
      </div>
    </>
  );
}

export default App;
