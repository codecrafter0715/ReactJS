import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<AddMovie />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
