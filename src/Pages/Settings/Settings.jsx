import React, { useContext, useState } from "react";
import "./settings.css";
import Sidebar from "../../Components/Sidebar";
import post from "../../images/post.jpg";
import { Context } from "../context/context";
import axios from "axios";

function Settings() {
  const { setNewUser, setNewToken, newUser, newToken, setUser, setToken } =
    useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const PF = "https://bloggify-w5po.onrender.com/images/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      email,
      password,
      username,
      id: newUser._id,
    };
    if (file) {
      const fileData = new FormData();
      const filename = Date.now() + file.name;
      fileData.append("name", filename);
      fileData.append("file", file);
      updatedUser.profilepic = filename;
      try {
        await axios.post(`${process.env.REACT_APP_BASEURL}/upload`, fileData);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASEURL}/user/${newUser._id}`,
        updatedUser,
        {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        }
      );
      setUser(res.data.user);
      setToken(res.data.token);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASEURL}/user/${newUser._id}`,
        {
          headers: {
            Authorization: `Bearer ${newToken}`,
            id: newUser._id,
          },
        }
      );
      setUser(null);
      setToken(null);
      setNewUser(null);
      setNewToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingTitles">
          <span className="updateTitle">Update Your Account</span>
          <span className="deleteTitle" onClick={handleDelete}>
            Delete account
          </span>
        </div>
        <form className="settingForm" onSubmit={handleSubmit}>
          <div className="settings-pp">
            <img
              src={file ? URL.createObjectURL(file) : PF + newUser.profilepic}
              alt="Profile Picture"
              className="setting-profile"
              id="ProfileP"
            />
            <label htmlFor="fileInput">
              <i class="pp-icon fa-solid fa-camera"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder={newUser.username}
            name="name"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={newUser.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="setting-submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
