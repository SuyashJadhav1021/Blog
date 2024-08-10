import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "../images/About.jpg";

function Sidebar() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASEURL}/user`);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebar-title">ABOUT US</span>
        <img src={About} alt="" className="sidebar-img" />
        <p className="sidebar-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          dignissimos deleniti nam, ullam itaque dolorum! Molestias rem veniam
          magni dignissimos, possimus neque odio velit ipsa
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebar-title">AUTHORS</span>
        <ul className="sidebarlist">
          {users.map((user) => (
            <li className="listitem">
              <Link to={`/?username=${user.username}`}>
                <button className="litem">{user.username}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="socialicons">
          <i class="sidebar-icons fa-brands fa-square-facebook"></i>
          <i class="sidebar-icons fa-brands fa-twitter"></i>
          <i class="sidebar-icons fa-brands fa-square-instagram"></i>
          <i class="sidebar-icons fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
