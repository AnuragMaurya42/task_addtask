import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/tasks'; // change port if different

function App() {
  const [tasks, setTasks] = useState([]);

  // ✅ Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_BASE);
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ✅ Add a new task
  const addTask = async (taskData) => {
    try {
      const res = await axios.post(API_BASE, taskData);
      setTasks((prev) => [res.data, ...prev]);
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  // ✅ Update task status (cycle through pending → in-progress → completed)
  const updateTaskStatus = async (id) => {
    try {
      const task = tasks.find((t) => t._id === id);
      const statusFlow = ['pending', 'in-progress', 'completed'];
      const nextStatus =
        statusFlow[(statusFlow.indexOf(task.status) + 1) % statusFlow.length];

      const res = await axios.put(`${API_BASE}/${id}`, { status: nextStatus });
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, status: res.data.status } : t))
      );
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };

  // ✅ Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>✔️ Task Manager</h1>
      </header>
      <main>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onUpdateStatus={updateTaskStatus}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;
