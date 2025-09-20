import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

function Header({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <header className="navbar">
      <div className="logo">🍴 RecipeBook</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/terms">Terms</Link></li>

          {!isAuthenticated ? (
            <li><Link to="/login" className="login-btn">Login</Link></li>
          ) : (
            <>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </>
          )}

          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
