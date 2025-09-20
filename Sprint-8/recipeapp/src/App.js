import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Recipes from "./pages/recipes";
import RecipeDetails from "./pages/recipeDetails";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* ✅ Navbar always visible */}
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />

        {/* Always keep login & signup available */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protect recipes routes */}
        {isAuthenticated ? (
          <>
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </>
        ) : (
          <>
            {/* Redirect unauthenticated users trying to access recipes */}
            <Route path="/recipes" element={<Navigate to="/login" />} />
            <Route path="/recipes/:id" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
