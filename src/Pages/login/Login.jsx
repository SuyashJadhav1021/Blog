import React, { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import axios from "axios";

function Login() {
  const { error, setUser, setError, setToken } = useContext(Context);
  const usernameRef = useRef();
  const passRef = useRef();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passRef.current.value,
      });
      setUser(res.data.others);
      setToken(res.data.token);
      window.location.replace("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-title">
          <h1 className="loginTitle">Login</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Username</label>
          <input
            name="username"
            id="Username"
            className="login-input"
            autoFocus={true}
            ref={usernameRef}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="login-input"
            ref={passRef}
          />
          <button className="loginButton" type="submit">
            Login
          </button>
          <Link to="/register">
            <span>Create a new account</span>
          </Link>
          {error && (
            <span className="login-error">
              Please provide valid credentials!
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
