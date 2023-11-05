// src/App.js
import React, { useState } from "react";
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

import useContentUpdate from "./hooks/useContentUpdate";

function App() {
  const [curPos, setCurPos] = useState(0);
  const [nextPos, setNextPos] = useState(0);
  const lastItem = 4; // Atualize este valor de acordo com o número de seções

  useContentUpdate(curPos, nextPos, lastItem);

  return (
    <>
      <DeviceNotification />
      <div className="perspective effect-rotate-left">
        <div className="container">
          <div className="outer-nav--return"></div>
          <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
              <Header />
              <Nav />
              <ul className="l-main-content main-content">
                <li className="l-section section section--is-active">
                  <Home />
                </li>
                <li className="l-section section ">
                  <Works />
                </li>
                <li className="l-section section">
                  <About />
                </li>
                <li className="l-section section">
                  <Contact />
                </li>
                <li className="l-section section">
                  <HireUs />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <OuterNav />
      </div>
    </>
  );
}

export default App;
