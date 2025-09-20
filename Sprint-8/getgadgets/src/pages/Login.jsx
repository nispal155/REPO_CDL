import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Login({ setIsAuth }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && form.username === savedUser.username && form.password === savedUser.password) {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleForgotPassword = () => {
    alert("Forgot Password functionality not implemented yet 🚀");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="GetGadgets Logo" className="logo-login" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="login-links">
          <Link to="/signup">Don’t have an account? Signup</Link>
          <button type="button" onClick={handleForgotPassword} className="forgot-btn">
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
