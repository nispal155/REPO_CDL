import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Open modal for new task
  const openNewTaskModal = () => {
    setCurrentTask(null);
    setIsModalOpen(true);
  };

  // Add or update task
  const handleSaveTask = (task) => {
    if (task.id) {
      // Update existing task
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      // Add new task
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  // Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <button className="add-btn" onClick={openNewTaskModal}>Add Task</button>
      <TaskList tasks={tasks} onEdit={setCurrentTask} onDelete={handleDeleteTask} openModal={() => setIsModalOpen(true)} />
      {isModalOpen && <TaskModal onSave={handleSaveTask} onClose={() => setIsModalOpen(false)} task={currentTask} />}
    </div>
  );
}

export default App;
