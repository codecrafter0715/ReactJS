import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="movie-list-container">
      <div className="movie-list">
        <h2>Movie List</h2>
        <Link to="/add" className="add-button">
          Add Movie
        </Link>
        {movies.length > 0 ? (
          <div className="movie-items">
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No movies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
