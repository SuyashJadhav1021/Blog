import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../Pages/context/context";
import { useContext } from "react";
import logo from "../images/Blog.png";
function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [index, setIndex] = useState("1");
  const { setUser, newUser, setNewUser, setNewToken, setToken } =
    useContext(Context);
  const handleLogOut = () => {
    setUser(null);
    setToken(null);
    setNewToken(null);
    setNewUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="navbar">
        <div className="menu-icon">
          <i
            class="fa-solid fa-bars menu"
            onClick={() => setShowSidebar(!showSidebar)}
          ></i>
        </div>
        <div className="left">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="center">
          <ul className="nav-list">
            <li className="listItem">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <Link to="/about" className="link">
              <li className="listItem">About</li>
            </Link>
            <li className="listItem">
              <Link to="/write" className="link">
                Write
              </Link>
            </li>
            <li className="listItem">Contact</li>
          </ul>
        </div>
        <div className="right">
          <div className="right-items">
            {newUser ? (
              <>
                <Link to="/settings">
                  <i class="user-icon fa-solid fa-user"></i>
                </Link>
                <button className="nav-btn" onClick={handleLogOut}>
                  Log Out
                </button>
              </>
            ) : (
              <ul className="nav-btn-list">
                <Link to="/login" className="link">
                  <button className="nav-btn">Login</button>
                </Link>
                <Link to="/register" className="link">
                  <button className="nav-btn">Register</button>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
      {showSidebar && (
        <div className="menubar">
          <div className="menubar-content">
            <ul className="menu-list">
              <Link to="/" className="link">
                <li
                  className={
                    index === "1" ? "menulist-item active" : "menulist-item"
                  }
                  onClick={() => setIndex("1")}
                >
                  Home
                </li>
              </Link>
              <Link to="/about" className="link">
                <li
                  className={
                    index === "2" ? "menulist-item active" : "menulist-item"
                  }
                  onClick={() => setIndex("2")}
                >
                  About
                </li>
              </Link>
              <Link to="/write" className="link">
                <li
                  className={
                    index === "3" ? "menulist-item active" : "menulist-item"
                  }
                  onClick={() => setIndex("3")}
                >
                  Write
                </li>
              </Link>
              <Link className="link">
                <li
                  className={
                    index === "4" ? "menulist-item active" : "menulist-item"
                  }
                  onClick={() => setIndex("4")}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

// <div className="menu-icon">
//           <i
//             class="fa-solid fa-bars menu"
//             onClick={() => setShowSidebar(!showSidebar)}
//           ></i>
