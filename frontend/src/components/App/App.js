import React, { useState } from 'react';
import AddForm from '../AddForm/AddForm';
import Task from '../Task/Task';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const updateTaskText = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <AddForm onAddTask={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={deleteTask}
          onUpdateTaskStatus={updateTaskStatus}
          onUpdateTaskText={updateTaskText}
        />
      ))}
      {/* Остальной код для отображения и управления списком задач */}
    </div>
  );
};

export default App;
