import React, { useState } from "react";
import "./WeatherApp.css"; // CSS file located in the same folder

const API_KEY = "d15697d320fc7ef673f8f5e5c836a21a"; // This is the api key for weather app

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-box">
        <h1>🌤 Weather App</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Search</button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <p className="desc">{weather.weather[0].description}</p>
            <div className="extra">
              <p>💨 {weather.wind.speed} m/s</p>
              <p>💧 {weather.main.humidity}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
