import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { ThemeContext } from "../hooks/ThemeContext";
import { AuthContext } from "../hooks/AuthContext";
import logo from "../assets/logo.jpeg"; // Import the logo (if stored in src/assets)

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { loggedUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
    alert("Logout Success");
  }

  return (
    <nav className={`navbar navbar-expand-lg ${theme}-theme`}>
      <div className="container-fluid">
        {/* Logo with Image */}
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Logo" height="50" className="d-inline-block align-top"/>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left side links */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Right side authentication and theme toggle */}
          <ul className="navbar-nav ms-auto">
            {loggedUser ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome, {loggedUser.name}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}

            {/* Theme Toggle Button */}
            <li className="nav-item ms-3">
              <button
                onClick={toggleTheme}
                className="btn btn-outline-secondary d-flex align-items-center"
              >
                {theme === "light" ? <BiToggleLeft size={30} /> : <BiToggleRight size={30} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
