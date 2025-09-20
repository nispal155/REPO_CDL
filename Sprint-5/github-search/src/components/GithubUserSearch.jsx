import React, { useState } from "react";
import "./GithubUserSearch.css";

function GithubUserSearch() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username) {
      setError("Please enter a GitHub username");
      return;
    }
    setError("");
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="github-container">
      <div className="github-box">
        <h1>🔍 GitHub User Search</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={fetchUser}>Search</button>
        </div>

        {error && <p className="error">{error}</p>}

        {userData && (
          <div className="user-card">
            <img src={userData.avatar_url} alt="avatar" />
            <h2>{userData.name || "No name provided"}</h2>
            <p>@{userData.login}</p>
            <p>{userData.bio || "No bio available"}</p>
            <div className="stats">
              <p>👥 Followers: {userData.followers}</p>
              <p>🔗 Following: {userData.following}</p>
              <p>📦 Repos: {userData.public_repos}</p>
            </div>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default GithubUserSearch;
