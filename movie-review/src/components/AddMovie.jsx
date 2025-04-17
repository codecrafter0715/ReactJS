import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { id: Date.now(), title, description, rating };
    addMovie(newMovie);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="add-movie">
        <h2>Add Movie</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Movie Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
