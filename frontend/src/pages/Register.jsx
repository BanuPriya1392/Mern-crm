import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../index.css"; // Ensure this import is correct

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://mern-crm-7gd9.onrender.com/api/auth/register",
        formData,
      );
      alert("Registration Successful");
      navigate("/"); // Redirect to login after success
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="login-wrapper">
      {" "}
      {/* Reusing the same wrapper for the background */}
      <div className="login-glass-card">
        {" "}
        {/* Reusing the glass card style */}
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
        <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
          Already have an account?{" "}
          <Link to="/" style={{ color: "#fff", fontWeight: "bold" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
