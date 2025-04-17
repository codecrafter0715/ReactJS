import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

export default function ListTask() {
  const { state, dispatch } = useContext(TaskContext);

  return (
    <div className="app-container">
      <div className="content-box">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-center w-100">Task List</h3>
          <Link to="/add" className="btn btn-primary">Add Task</Link>
        </div>

        {state.length === 0 ? (
          <p className="text-center text-muted">No tasks available. Add a new task.</p>
        ) : (
          <div className="table-responsive"> 
            <table className="table table-bordered text-center">
              <thead className="thead-dark">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.map((task) => (
                  <tr key={task.id}>
                    
                    <td className={task.completed ? "text-decoration-line-through" : ""}>
                      {task.title}
                    </td>
                    <td>{task.description}</td>
                    <td>
                     
                      <button className="btn btn-success me-2"
                        onClick={() => dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })}
                      >
                        {task.completed ? "Undo" : "Complete"}
                      </button>
                      <button className="btn btn-warning me-2"
                        onClick={() =>
                          dispatch({
                            type: "EDIT_TASK",
                            payload: {
                              ...task,
                              title: prompt("Edit Title:", task.title) || task.title,
                            },
                          })
                        }
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger"
                        onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
