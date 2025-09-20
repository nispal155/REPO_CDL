// src/pages/RecipeDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./recipes.css";

function RecipeDetails() {
  const { idMeal } = useParams(); // Get ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single recipe details
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [idMeal]);

  if (loading) {
    return (
      <div className="recipe-detail">
        <h2>Loading recipe details...</h2>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="recipe-detail">
        <h2>Recipe not found</h2>
        <Link to="/recipes" className="back-btn">
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="detail-img"
      />
      <h1>{recipe.strMeal}</h1>

      {/* Category and Area */}
      <p className="detail-desc">
        <strong>Category:</strong> {recipe.strCategory} |{" "}
        <strong>Cuisine:</strong> {recipe.strArea}
      </p>

      {/* Instructions */}
      <p className="detail-desc" style={{ textAlign: "justify" }}>
        {recipe.strInstructions}
      </p>

      {/* Ingredients List */}
      <h3 style={{ marginTop: "30px", color: "#ff6f61" }}>Ingredients:</h3>
      <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = recipe[`strIngredient${index + 1}`];
          const measure = recipe[`strMeasure${index + 1}`];
          return (
            ingredient &&
            ingredient.trim() !== "" && (
              <li key={index} style={{ padding: "5px 0", color: "#555" }}>
                {ingredient} - {measure}
              </li>
            )
          );
        })}
      </ul>

      {/* Back button */}
      <Link to="/recipes" className="back-btn" style={{ marginTop: "20px" }}>
        Back to Recipes
      </Link>
    </div>
  );
}

export default RecipeDetails;
