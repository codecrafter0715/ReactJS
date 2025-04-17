import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Form } from 'react-bootstrap';

const Reports = () => {
  const { transactions } = useContext(TransactionContext);
  const [selectedMonth, setSelectedMonth] = useState('All');

  const months = [
    'All', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const filteredTransactions = transactions.filter((t) => {
    if (selectedMonth === 'All') return true;

    const monthIndex = new Date(t.date).getMonth(); 
    return months[monthIndex + 1] === selectedMonth;
  });

  const data = [
    {
      name: 'Income',
      value: filteredTransactions
        .filter((t) => t.type === 'Income')
        .reduce((a, c) => a + c.amount, 0),
    },
    {
      name: 'Expense',
      value: filteredTransactions
        .filter((t) => t.type === 'Expense')
        .reduce((a, c) => a + c.amount, 0),
    },
  ];

  const COLORS = ['#00C49F', '#FF8042'];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Reports</h2>

      {/* Filter Dropdown */}
      <Form className="mb-4" style={{ maxWidth: '300px', margin: '0 auto' }}>
        <Form.Group controlId="monthFilter">
          <Form.Label>Filter by Month</Form.Label>
          <Form.Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month, idx) => (
              <option key={idx} value={month}>
                {month}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>

      {/* Bigger Pie Chart */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PieChart width={600} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={130}
            dataKey="value"
            label
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>
    </div>
  );
};

export default Reports;
