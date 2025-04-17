import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Registration = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    localStorage.setItem('user', JSON.stringify(form));

    alert('Registered Successfully!');
    navigate('/login');
  };

  return (
    <Form onSubmit={handleSubmit} className="shadow p-4 rounded" style={{backgroundColor: 'skyblue', width:'600px', margin: '0 auto' }}>
      <h2>Register</h2>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
      </Form.Group>
      <Button type="submit">Register</Button>
      <p className="mt-3">
        Already registered? <Link to="/login">Login here</Link>
      </p>
    </Form>
  );
};

export default Registration;
