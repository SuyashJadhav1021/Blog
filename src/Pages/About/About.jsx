import React from "react";
import "./about.css";
import about from "../../images/About.jpg";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-left">
            <h1 className="about-title">ABOUT US</h1>
            <div className="about-info-container">
              <p className="about-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto voluptatibus est explicabo officia consequuntur culpa
                provident soluta odit cumque fuga voluptates perspiciatis, cum
                doloremque reiciendis autem aliquid amet, magnam ipsa
              </p>
              <button className="about-btn">Learn More</button>
            </div>
          </div>
          <div className="about-right">
            <img src={about} alt="about" className="about-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
