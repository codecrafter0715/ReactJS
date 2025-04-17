import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert('No registered user found. Please sign up first.');
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      onLogin();
      navigate('/dashboard');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="shadow p-4 rounded" style={{backgroundColor: 'skyblue', width:'600px', margin: '0 auto' }}>
      <h2>Login</h2>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>
      <Button type="submit">Login</Button>
      <p className="mt-3">
        Not registered? <Link to="/register">Sign up here</Link>
      </p>
    </Form>
  );
};

export default Login;
