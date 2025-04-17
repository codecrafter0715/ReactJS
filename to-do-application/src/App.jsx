import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <h2 className="mb-4">To-Do Application</h2>
        <div className="p-4 shadow-lg rounded bg-white w-100 text-center">
          <Routes>
            <Route path="/" element={<ListTask />} />
            <Route path="/add" element={<AddTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
