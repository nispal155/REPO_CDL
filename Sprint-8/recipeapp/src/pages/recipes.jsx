// src/pages/Recipes.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetching recipes from TheMealDB free API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await response.json();
        if (data.meals) {
          setRecipes(data.meals);
          setFilteredRecipes(data.meals);
        } else {
          setRecipes([]);
          setFilteredRecipes([]);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  // Filter recipes based on search input
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue === "") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(searchValue)
      );
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div className="recipe-container">
      <h1>Delicious Recipes</h1>

      {/* Search Bar */}
      <div style={{ marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "10px 15px",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "30px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "1rem",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Recipe Grid */}
      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h2>{recipe.strMeal}</h2>
              <p>
                {recipe.strInstructions.length > 100
                  ? `${recipe.strInstructions.slice(0, 100)}...`
                  : recipe.strInstructions}
              </p>
              <Link to={`/recipe/${recipe.idMeal}`} className="view-btn">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p style={{ color: "#666", fontSize: "1.2rem" }}>
            No recipes found. Try a different search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
