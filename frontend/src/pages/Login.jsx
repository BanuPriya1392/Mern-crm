import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // 1. Added Link here
import "../index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api-mernz.onrender.com/api/auth/login",
        {
          email,
          password,
        },
      );
      localStorage.setItem("token", res.data.token);
      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-glass-card">
        <h2>CRM Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* 2. Added the link to the Register page here */}
        <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
