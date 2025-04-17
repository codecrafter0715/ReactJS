import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem('user'));

    if (!registeredUser) {
      setAlertType('danger');
      setAlertMsg('No registered user found. Please register first.');
      return;
    }

    if (email === registeredUser.email && password === registeredUser.password) {
      login();
      setAlertType('success');
      setAlertMsg('Login successful! Redirecting...');
      if (rememberMe) {
        localStorage.setItem('rememberMe', true);
      }
      setTimeout(() => {
        navigate('/candidate-registration');
      }, 1500);
    } else {
      setAlertType('danger');
      setAlertMsg('Invalid email or password.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6 p-4 shadow rounded bg-light">
        <h2 className="text-center mb-4">Login</h2>

        {alertMsg && <div className={`alert alert-${alertType}`}>{alertMsg}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>

        <p className="mt-3 text-center">
          Don’t have an account?{' '}
          <span className="text-primary" style={{ cursor: 'pointer' }} onClick={() => navigate('/register')}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

