import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch({
        type: "ADD_TASK",
        payload: {
          title,
          description,
          completed: false,
          id: Date.now(), 
        },
      });
      navigate("/"); 
    }
  };

  return (
    <div className="app-container">
      <div className="content-box">
        <h3 className="text-center">Add New Task</h3>
        <form onSubmit={handleAddTask}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Task Description
            </label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}


