// LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../../src/App.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = () => {
    // In a real app, you would perform authentication here.
    // For simplicity, we'll just check for a hardcoded username and password.
    if (username === "admin" && password === "admin") {
      localStorage.setItem("role", "admin");
      navigate("/adminboard");
      //   onLogin('admin');
    } else if (username === "user" && password === "user") {
      //   onLogin('user');
      localStorage.setItem("role", "user");
      navigate("/dashboard");
    } else if (username === "user1" && password === "user1") {
      //   onLogin('user');
      localStorage.setItem("role", "user1");
      navigate("/userdashboard");
    }
    else if (username === "manager" && password === "1230") {
        //   onLogin('user');
        localStorage.setItem("role", "manager");
        navigate("/projectscreen");
      } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* <div>
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div> */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
