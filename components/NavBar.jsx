import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../img/logo.svg";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-home">
          <img src={logo} alt="" className="navbar-logo" />
          <h1 className="navbar-heading">GreenIQ</h1>
        </div>
        <ul className="navbar-list">
          <li>
            <a href="#">HOW TO PLAY</a>
          </li>
          <li>
            <a href="#">MY SCORE</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
