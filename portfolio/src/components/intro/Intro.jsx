import React from "react";
import "./intro.css";
import pic from "../../assets/pic.png";
import { Link } from "react-router";
import btnImg from "../../assets/hireme.png";

function Intro() {
  return (
    <div className="introContainer">
      <section className="intro">
        <div className="introContent">
          <span className="hello">Hello, </span>
          <span className="introText">
            I'm <span className="introName">Ali Shan</span>
            <br /> <span style={{ color: "yellow" }}>JavaScript </span>Developer
          </span>
          <p className="introPara">
            "Full-Stack Developer passionate about building scalable,
            user-focused solutions."
          </p>
          <Link
            className="btn"
            to="https://github.com/alishann1"
            target="_blank"
          >
            <button className="btn">
              <img src={btnImg} alt="Hire Me" className="btnImg" /> Hire Me
            </button>
          </Link>
        </div>
        <img src={pic} alt="pic" className="bg" />
      </section>
    </div>
  );
}

export default Intro;
