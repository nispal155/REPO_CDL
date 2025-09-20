import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, posterPath, releaseDate, rating }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${posterPath}`}
        alt={title}
      />
      <h3>{title}</h3>
      <p>Release: {releaseDate}</p>
      <p>Rating: ⭐ {rating}</p>
    </div>
  );
};

export default MovieCard;
