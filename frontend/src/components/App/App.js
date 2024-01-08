// App.js

import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import AddForm from '../AddForm/AddForm';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const updateTaskText = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, title: newText } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Список дел</h1>
      <AddForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTaskStatus={updateTaskStatus}
        onUpdateTaskText={updateTaskText}
      />
    </div>
  );
};

export default App;
