import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import CarouselCategory from './components/CarouselCategory';
import HeroSection from './components/HeroSection';
import ListOfCategory from './components/ListOfCategory';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar cartItemCount={3} />  
        <HeroSection />
        <CarouselCategory />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carouselcategory" element={<CarouselCategory />} />
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/categories" element={<ListOfCategory />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
