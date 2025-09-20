import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onEdit, onDelete, openModal }) {
  if (tasks.length === 0) {
    return <p className="empty-msg">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => { onEdit(task); openModal(); }}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
