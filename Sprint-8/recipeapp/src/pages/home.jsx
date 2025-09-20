import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import "./pages.css";

function Home({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/recipes"); // redirect to Recipes page
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>🍲 Recipe Book</h1>
          <p>Discover, Share & Cook Delicious Recipes</p>
          <button className="cta-btn" onClick={handleExplore}>Explore Recipes</button>
        </div>
      </section>

      {/* Featured Recipes */}
      <main>
        <h2>Featured Recipes</h2>
        <div className="recipe-grid">
          <div className="recipe-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIhREeOoZIUlPnzoZcR5TAr1x317D74mGtAZsVocugBOGJSm4qSCyokJSA4KR7UigaEUlZQKexo9WTNF5EvsMlUqp2KZlo6DYvvUtJPN1" alt="Pizza" />
            <h3>Pizza</h3>
            <p>Cheesy goodness with fresh toppings.</p>
          </div>
          <div className="recipe-card">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQROZowizwioxBDo2iTBeqBNtqYUOudVjNOwPVSVbW3PlXFo6f4WB-YVaXhgfhS2IL_OSpVB0kNwyYUGhOsjZhVQ4HmO1bYBq9mCz9xpDay" alt="Burger" />
            <h3>Burger</h3>
            <p>Juicy, crispy, and full of flavor.</p>
          </div>
          <div className="recipe-card">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzSpcA0fOOTouzgw8FH17KQFJo1h0BuGjVdKQDH54IujHeHgRyXpHXdcxzd_x67aBVR-oQI_VadMN363wiJdqK3foinTx_zxK_uYvI0AJz" alt="Cake" />
            <h3>Cake</h3>
            <p>Sweet indulgence for every occasion.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
