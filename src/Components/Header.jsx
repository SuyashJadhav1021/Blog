import React from "react";
import "./header.css";
import Banner from "../images/Banner.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <div className="left-content">
          <span className="span-text">WRITE</span> WHAT YOU FEEL
          <div className="btn">
            <Link to={"/write"}>
              <button className="header-btn">Let's Write</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="right-header">
        <img className="banner-img" src={Banner} alt="banner" />
      </div>
    </div>
  );
}

export default Header;
