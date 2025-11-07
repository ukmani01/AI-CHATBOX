import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";

import Chatbox from "./kkk/Chatbox";
import Register from "./resister/Register";
import Login from "./resister/Login";
import Home from "./resister/Home";
import About from "./resister/About";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import History from "../src/History/History.js";
import { PersonCircle } from "react-bootstrap-icons";

//import "./App.css";

// Navbar component
const Navbar = ({ token, username, logout }) => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#eee",
    }}
  >
    {/* Left side: NavbarMenu */}
    <NavbarMenu />

    {/* Right side: Auth */}
    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
      {token ? (
        <>
          <span>
            <PersonCircle size={24} /> {username}
          </span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/">Register</Link>
        </>
      )}
    </div>
  </nav>
);

// Protected route
const ProtectedRoute = ({ token, children }) =>
  !token ? <Navigate to="/login" replace /> : children;

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    if (username) localStorage.setItem("username", username);
  }, [token, username]);

  const logout = () => {
    setToken("");
    setUsername("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      <Navbar token={token} username={username} logout={logout} />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/login"
          element={<Login setToken={setToken} setUsername={setUsername} />}
        />
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* History page */}
        <Route
          path="/history"
          element={
            <ProtectedRoute token={token}>
              <History />
            </ProtectedRoute>
          }
        />

        {/* Chat page */}
        <Route
          path="/chat"
          element={
            <ProtectedRoute token={token}>
              <Chatbox username={username} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router basename={process.env.NODE_ENV === "production" ? "/AI-CHATBOX" : "/"}  >
      <App />
      
    </Router>
  );
}
