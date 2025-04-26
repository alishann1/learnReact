import React from "react";
import jslogo from "../../assets/jslogo.jpg";
import "./navbar.css";
import { Link } from "react-router-dom";
import contact from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={jslogo} alt="jslogo" className="jslogo" />
      <div className="desktopMenu">
        <Link className="desktopMenuItems" to="/">
          Home
        </Link>
        <Link className="desktopMenuItems" to="/About">
          About
        </Link>
        <Link className="desktopMenuItems" to="/Portfolio">
          Portfolio
        </Link>
        <Link className="desktopMenuItems" to="/Clients">
          Clients
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="" className="desktopMenuImg" />
        Lets Talk
      </button>
    </nav>
  );
};

export default Navbar;
