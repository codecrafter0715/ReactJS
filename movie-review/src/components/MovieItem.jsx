import React from 'react';
import { CiStar } from 'react-icons/ci';  // Import the star icon

const MovieItem = ({ movie }) => {
  const rating = movie.rating;
  const stars = [];

  // Generate stars based on the rating
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<CiStar key={i} style={{ color: 'gold' }} />);  // Filled star in gold
    } else {
      stars.push(<CiStar key={i} style={{ color: 'lightgray' }} />);  // Empty star in light gray
    }
  }

  return (
    <div className="movie-item">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p className="rating">
        {stars} 
      </p>
    </div>
  );
};

export default MovieItem;
