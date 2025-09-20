import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import "./pages.css";

function Terms({ setIsAuthenticated }) {
  return (
    <div className="page-container">

      <main>
        <h2>Terms & Conditions</h2>
        <p>By using Recipe Book, you agree to share tasty recipes responsibly 😋.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Terms;
