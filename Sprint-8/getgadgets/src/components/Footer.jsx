import React from "react";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company">
          <img src={logo} alt="GetGadgets Logo" className="footer-logo" />
          <p>
            GetGadgets is your ultimate online destination for the latest gadgets.
            We provide top-quality electronics with fast delivery and excellent support.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section support">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="footer-section newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
              e.target.reset();
            }}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GetGadgets. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
