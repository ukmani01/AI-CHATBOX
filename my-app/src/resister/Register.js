import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      setMsg("✅ Registered successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch {
      setMsg("❌ Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="bg-white rounded-2xl p-8 w-80 sm:w-96 shadow-2xl border border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Register</h2>
        <p className="text-gray-600 mb-6 text-sm subtitle">
          Create your account to access the AI Chatbox
        </p>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={onChange}
            className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Register
          </button>
        </form>

        {msg && <p className="mt-4 text-sm text-gray-600">{msg}</p>}

        <p className="text-gray-600 mt-4 text-sm footer-text">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline ml-1">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
