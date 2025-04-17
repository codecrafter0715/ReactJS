import React, { useContext, useState } from "react";
import { Card, Table, Button, Modal, Form } from "react-bootstrap";
import { TransactionContext } from "../context/TransactionContext";

const Dashboard = () => {
  const { transactions, deleteTransaction, updateTransaction } = useContext(TransactionContext);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleEdit = (txn) => {
    setEditData(txn);
    setShowEditModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTransaction(editData);
    setShowEditModal(false);
  };

  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="d-flex gap-3 mb-4">
        <Card
          className={`p-3 text-white flex-fill text-center ${
            income - expense >= 0 ? "bg-primary" : "bg-warning"
          }`}
        >
          <h4>Total Balance</h4>
          <p className="fw-bold">₹{income - expense}</p>
        </Card>

        <Card className="p-3 bg-success text-white flex-fill text-center">
          <h4>Total Income</h4>
          <p className="fw-bold">₹{income}</p>
        </Card>

        <Card className="p-3 bg-danger text-white flex-fill text-center">
          <h4>Total Expense</h4>
          <p className="fw-bold">₹{expense}</p>
        </Card>
      </div>

      <h4>Transactions</h4>
      {transactions.length === 0 ? (
        <p>No transactions added yet.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.date}</td>
                <td>{txn.type}</td>
                <td>{txn.category}</td>
                <td>{txn.description}</td>
                <td
                  className={
                    txn.type === "Income" ? "text-success" : "text-danger"
                  }
                >
                  ₹{txn.amount}
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(txn)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTransaction(txn.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editData && (
            <Form onSubmit={handleUpdate}>
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={editData.type}
                  onChange={(e) =>
                    setEditData({ ...editData, type: e.target.value })
                  }
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.category}
                  onChange={(e) =>
                    setEditData({ ...editData, category: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({ ...editData, description: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={editData.amount}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      amount: Number(e.target.value),
                    })
                  }
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dashboard;



