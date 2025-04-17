import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
