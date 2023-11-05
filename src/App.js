// src/App.js
import React from "react";
import Header from "./components/globals/Header/Header";
import Nav from "./components/globals/nav/Nav";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HireUs from "./pages/HireUs";
import "./css/main.sass";
import "./css/main.css";
function App() {
  return (
    <div id="viewport" className="l-viewport">
      <div className="l-wrapper">
        <Header />
        <Nav />
        <ul className="l-main-content main-content">
          <li className="l-section section ">
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
          <li className="l-section section section--is-active">
            <HireUs />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
