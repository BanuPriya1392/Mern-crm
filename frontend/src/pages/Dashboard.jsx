import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("token");

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/customers", {
        headers: { Authorization: token },
      });
      setCustomers(res.data);
    } catch (error) {
      console.error("Error fetching customers");
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const addCustomer = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:5000/api/customers",
      { name, email },
      {
        headers: { Authorization: token },
      },
    );
    setName("");
    setEmail("");
    fetchCustomers();
  };

  const deleteCustomer = async (id) => {
    await axios.delete(
      `https://mern-crm-7gd9.onrender.com/api/customers/${id}`,
      {
        headers: { Authorization: token },
      },
    );
    fetchCustomers();
  };

  return (
    <div
      className="login-wrapper"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <div className="login-glass-card" style={{ maxWidth: "600px" }}>
        <h2>CRM Dashboard</h2>

        <form onSubmit={addCustomer} style={{ marginBottom: "30px" }}>
          <h4>Add Customer</h4>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Add Customer
          </button>
        </form>

        <h4>Customer List</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {customers.map((c) => (
            <li
              key={c._id}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {c.name} - {c.email}
              <button
                onClick={() => deleteCustomer(c._id)}
                style={{
                  background: "#ff4d4d",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
