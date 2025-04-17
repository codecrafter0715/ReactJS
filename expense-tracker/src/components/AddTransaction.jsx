import React, { useState, useContext } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { TransactionContext } from '../context/TransactionContext';
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [form, setForm] = useState({
    amount: '',
    type: 'Expense',
    category: '',
    date: '',
    description: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      ...form,
      id: uuidv4(),
      amount: parseFloat(form.amount),
    };
    addTransaction(newTransaction);
    setForm({ amount: '', type: 'Expense', category: '', date: '', description: '' });
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ backgroundColor: 'skyblue',width: '100%', maxWidth: '500px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <h3 className="text-center mb-4">Add Transaction</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select name="type" value={form.type} onChange={handleChange}>
                <option>Income</option>
                <option>Expense</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="primary">Add</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddTransaction;
