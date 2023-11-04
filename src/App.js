// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/globals/Header/Header";
import Nav from "./components/globals/nav/Nav";
import Home from "./pages/Home";
import Works from "./pages/Works";
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
          <li className="l-section section section--is-active">
            <Works />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
