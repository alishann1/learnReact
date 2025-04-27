import React from "react";
import "./services.css";
import pic1 from "../../../assets/unsplash1.jpg";
import pic2 from "../../../assets/unsplash3.jpg";
import pic3 from "../../../assets/unsplash6.jpg";

function Services() {
  return (
    <div className="servicesContainer">
      <div className="servicesContent">
        <span className="myServices">
          My <span style={{ color: "yellow" }}>Services</span>
        </span>
        <p className="servicesText">
          I will make a lightweight and responsive website for you
        </p>
        <div className="servicesCards">
          <div className="card">
            <span className="cardText">UI/UX Design</span>
            <img src={pic1} alt="" />
          </div>

          <div className="card">
            <span className="cardText">Web Design</span>
            <img src={pic2} alt="" />
          </div>

          <div className="card">
            <span className="cardText">Web Development</span>
            <img src={pic3} alt="" />
          </div>
        </div>
        <button className="seeAll">See All</button>
      </div>
    </div>
  );
}

export default Services;
