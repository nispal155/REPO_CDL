import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user already exists
    if (users.some((user) => user.email === form.email)) {
      alert("User already exists! Please login.");
      return;
    }

    // save new user
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now login.");
    setForm({ email: "", password: "" });
  };

  return (
    <div className="page-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="form-box">
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
