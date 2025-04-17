import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { TransactionProvider } from './context/TransactionContext';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddTransaction from './components/AddTransaction';
import Reports from './components/Reports';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRoutes = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={logout} />
      <div className="container mt-4">
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/add" element={isAuthenticated ? <AddTransaction /> : <Navigate to="/login" />} />
          <Route path="/reports" element={isAuthenticated ? <Reports /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <AppRoutes />
      </TransactionProvider>
    </AuthProvider>
  );
}

export default App;

