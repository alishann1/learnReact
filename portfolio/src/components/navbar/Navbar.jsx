import React from "react";
import jslogo from "../../assets/jslogo.png";
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
        <Link className="desktopMenuItems" to="/Services">
          Services
        </Link>
        <Link className="desktopMenuItems" to="/WorkSkills">
          Work Skills
        </Link>
      </div>
      <Link className="whatsapp" to="https://wa.me/03170057749" target="_blank">
        <button className="desktopMenuBtn">
          <img src={contact} alt="" className="desktopMenuImg" />
          Lets Talk
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
