import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuth") === "true";
    setIsAuth(loggedIn);
  }, []);

  return (
    <Router>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <div className="main-content">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />

          {/* Protected route */}
          <Route
            path="/products"
            element={isAuth ? <Products /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
