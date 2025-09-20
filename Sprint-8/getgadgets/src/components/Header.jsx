import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Header({ isAuth, setIsAuth }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="GetGadgets Logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {isAuth ? (
          <>
            <Link to="/products">Products</Link>
            <Link to="/profile">Profile</Link>
            <span className="username">Hi, {user.username}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
