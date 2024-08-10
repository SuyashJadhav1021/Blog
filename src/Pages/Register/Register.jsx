import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASEURL}/auth/register`,
        {
          username,
          email,
          password,
        }
      );
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-title">
          <h1 className="registerTitle">Register</h1>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="register-input"
            autoFocus={true}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="register-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="register-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton" type="submit">
            Register
          </button>
          <Link to="/login">
            <span className="login-text">already have an account? </span>
            Login
          </Link>
          {error && (
            <span className="register-error">Something went wrong!</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
