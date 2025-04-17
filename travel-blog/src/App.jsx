import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Blog from "./components/Blog";
import "./App.css";  

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






