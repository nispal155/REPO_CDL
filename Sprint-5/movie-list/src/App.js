import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import './App.css';


const API_KEY = '6186b15e06d4a20dde1c97bb22e3a847';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error('Error fetching movies:', err));
  };

  const searchMovies = () => {
    if (!searchTerm.trim()) return;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}`
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error('Search failed:', err));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovies();
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">🎬 Movie Explorer</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      <div className="movies-list">
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
            />
          ))
        ) : (
          <p className="no-movies">No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
