import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo centre">
        <Link to="header" smooth={true} duration={1000}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="list centre">
        <Link to="header" smooth={true} duration={1000}>
          <li className="list-item-1">Home</li>
        </Link>
        <Link to="section" smooth={true} duration={1000}>
          <li className="list-item-1">Features</li>
        </Link>
        <Link to="#" smooth={true} duration={1000}>
          <li className="list-item-1">About</li>
        </Link>
      </ul>
      <ul className="list centre">
        <li className="list-item-2 un-filled">
          <a href="#">Sign In</a>
        </li>
        <li className="list-item-2 filled">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
