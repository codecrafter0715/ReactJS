import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { FaMoneyBillWave } from 'react-icons/fa'; 

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaMoneyBillWave className="me-2" size={24} />
          Expense Tracker
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/add">Add</Nav.Link>
                <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <Button variant="outline-light" onClick={onLogout}>Logout</Button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
