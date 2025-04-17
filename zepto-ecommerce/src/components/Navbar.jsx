import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"; 
const Navbar = ({ cartItemCount = 3 }) => {
  return (
    
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        backgroundImage: "linear-gradient(to top, white, rgb(201, 163, 241))",
      }}
    >
      <div className="container-fluid">
       
        <Link className="navbar-brand ms-3" to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "60px", marginLeft: "20px" }}
          />
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar-nav"
          aria-controls="main-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="main-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:"17px",fontWeight:"bold",fontFamily:"sans-serif",gap:"40px"}}>
            
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>

          
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <form className="d-flex mx-auto" role="search" >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "500px" }}
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="fas fa-search"></i> {/* Font Awesome Search Icon */}
            </button>
          </form>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " style={{fontSize:"17px",fontWeight:"bold",fontFamily:"sans-serif",marginRight:"30px",gap:"40px"}}>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart <span className="badge bg-primary">{cartItemCount}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="profileDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Profile
          </Link>
          <ul className="dropdown-menu" aria-labelledby="profileDropdown">
            <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
            <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
