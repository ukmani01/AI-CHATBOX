import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'
const Login = ({ setToken, setUsername }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      setToken(res.data.token);
      setUsername(res.data.username);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      setMsg("✅ Login successful! Redirecting to Chat...");
      setTimeout(() => navigate("/chat"), 1000);
    } catch (err) {
      setMsg("❌ netWork faild!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input type="email" name="email" placeholder="Email" onChange={onChange} />
        <input type="password" name="password" placeholder="Password" onChange={onChange} />
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default Login;
