import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import "./pages.css";

function Contact({ setIsAuthenticated }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Dummy form)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-container">
      
      <main>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="form-box">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
