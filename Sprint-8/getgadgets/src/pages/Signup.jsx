import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, photo: reader.result }); // save base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src={logo} alt="GetGadgets Logo" className="logo-signup" />
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            required
          />
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {form.photo && (
            <img
              src={form.photo}
              alt="Preview"
              style={{ width: "80px", height: "80px", borderRadius: "50%", margin: "10px auto" }}
            />
          )}
          <button type="submit" className="signup-btn">Signup</button>
        </form>
        <div className="signup-links">
          Already have an account? <span onClick={() => navigate("/login")} style={{cursor:"pointer", color:"#0a74da"}}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
