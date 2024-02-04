import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../img/logoCombine.svg";

function NavBar({ loggedIn }) {
  return (
    <>
      <div className="navbar">
        <div className="navbar-home">
          <a href="#">
            <img src={logo} alt="" className="navbar-logo" />
          </a>
        </div>
        <ul className="navbar-list">
          <li>{loggedIn ? <a href="#score">MY SCORE</a> : <div></div>}</li>
          <li>
            <a href="#play">HOW TO PLAY</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
