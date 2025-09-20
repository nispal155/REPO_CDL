import React from "react";

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <li className="task-item">
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
