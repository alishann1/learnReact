import React from "react";
import "./about.css";
import pic2 from "../../../assets/pic2.png";

function About() {
  return (
    <div className="aboutContainer">
      <img src={pic2} alt="" className="pic2" />

      <div className="aboutContent">
        <span className="aboutMe">About Me</span>
        <p className="aboutText">
          Get a website that will make a lasting impression on your audience
        </p>
        <div className="aboutTable">
          <table cellpadding="8" cellspacing="3">
            <tbody>
              <tr>
                <td>
                  <strong>Name:</strong>
                </td>
                <td>Ali Shan</td>
              </tr>
              <tr>
                <td>
                  <strong>Phone:</strong>
                </td>
                <td>+(92) 3170057749</td>
              </tr>
              <tr>
                <td>
                  <strong>Email:</strong>
                </td>
                <td>alishanamin125@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <strong>Github:</strong>
                </td>
                <td>alishann1</td>
              </tr>
            </tbody>
          </table>
          <button className="contactMe">Contact Me ➔</button>
        </div>
      </div>
    </div>
  );
}

export default About;
