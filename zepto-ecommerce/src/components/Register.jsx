import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    // Show success message and redirect to login
    setSuccess('Registered successfully! Redirecting to login...');
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6 p-4 shadow rounded bg-light">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="mb-3 rounded-circle" width="80" />
          <h2>Register</h2>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-3"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{' '}
          <span
            className="text-primary"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/login')}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
