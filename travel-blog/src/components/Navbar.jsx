import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Travel With Us</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>  
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="search-container">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <FaSearch className="search-icon" />
          </div>
          <div className="user-icon">
            <FaUser />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
