import React from "react";
import "./workskills.css";
import img1 from "../../../assets/jslogo.png";
import img2 from "../../../assets/reactlogo.png";
import img3 from "../../../assets/nodelogo.png";
import img4 from "../../../assets/pythonlogo.png";
import img5 from "../../../assets/ailogo.png";
import img6 from "../../../assets/allogo.png";
import img7 from "../../../assets/pslogo.png";
import img8 from "../../../assets/wordlogo.png";

function WorkSkills() {
  return (
    <div className="workSkillsContainer">
      <div className="workSkillsContent">
        <span className="myWorkSkills">
          My Work <span style={{ color: "yellow" }}>Skills</span>
        </span>
        <br />
        <span className="workSkillText">
          I have sufficient experience working with the tools below
        </span>
        <div className="cardsPage">
          <div className="cardsRow">
            <div className="skillCard">
              <img src={img1} alt="" className="cardImg" />
            </div>
            <div className="skillCard">
              <img src={img2} alt="" className="cardImg" />
            </div>
            <div className="skillCard">
              <img src={img3} alt="" className="cardImg" />
            </div>
            <div className="skillCard">
              <img src={img4} alt="" className="cardImg" />
            </div>
          </div>

          <div className="cardsRow">
            <div className="skillCard">
              <img src={img5} alt="" className="cardImg" />
            </div>
            <div className="skillCard">
              <img src={img6} alt="" className="cardImg" />
            </div>
            <div className="skillCard">
              <img src={img7} alt="" className="cardImg" />
            </div>
            <div className="skillCard">
              <img src={img8} alt="" className="cardImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSkills;
