import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import "./pages.css";

function Profile({ setIsAuthenticated }) {
  const currentUser = JSON.parse(localStorage.getItem("users"))?.[0] || { email: "guest@example.com" };

  return (
    <div className="page-container">
      <Header setIsAuthenticated={setIsAuthenticated} />
      <main>
        <h2>My Profile</h2>
        <p>Email: {currentUser.email}</p>
        <p>More profile details coming soon...</p>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
