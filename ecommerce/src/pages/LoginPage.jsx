import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../hooks/AuthContext";
import { ThemeContext } from "../hooks/ThemeContext";
import formImage from "../assets/formImage.jpg";
import "./LoginPage.css";

const LoginPage = () => {
  const { login, loggedUser } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      navigate("/home");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Column - Image */}
        <div className="col-md-6">
          <img src={formImage} alt="Login Visual" className="img-fluid" />
        </div>

        {/* Right Column - Login Form */}
        <div className="col-md-6">
          <form
            onSubmit={handleFormSubmit}
            className={`p-4 rounded shadow ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
          >
            <h3 className="mb-3">Login Here</h3>

            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={inputRef}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">Login</button>

            {/* Register Link */}
            <div className="mt-3">
              <Link to="/register">Not registered? Sign up here</Link>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
