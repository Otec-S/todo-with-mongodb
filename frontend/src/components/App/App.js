import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import AddForm from "../AddForm/AddForm";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../../utils/api";

import "./App.css";

const App = () => {
  //стейт с массивом всех заданий
  const [tasks, setTasks] = useState([]);

  //ПОЛУЧЕНИЕ массива заданий с бэка
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await getAllTodos();
        setTasks(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData();
  }, []);

  //ДОБАВЛЕНИЕ нового задания в массив заданий
  const addTask = async (newTask) => {
    try {
      const newTodo = await createTodo(newTask);
      setTasks([...tasks, newTodo]);
    } catch (error) {
      console.error(error);
    }
  };

  //УДАЛЕНИЕ задания из массива
  const deleteTask = async (taskId) => {
    try {
      await deleteTodo(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error(error);
    }
  };

  //ОБНОЕЛЕНИЕ ПОЛЕЙ задания
  const updateTaskFields = async (taskId, newTitle, newDescription) => {
    try {
      const updatedTodo = await updateTodo(taskId, {
        title: newTitle,
        description: newDescription,
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId
            ? {
                ...task,
                title: updatedTodo.title,
                description: updatedTodo.description,
              }
            : task
        )
      );
    } catch (error) {
      console.error("Error updating todo fields:", error);
    }
  };

  //ОБНОВЛЕНИЕ СТАТУСА задания
  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      const updatedTodo = await updateTodo(taskId, { status: newStatus });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, status: updatedTodo.status } : task
        )
      );
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <AddForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        onDeleteTask={deleteTask}
        onUpdateTaskFields={updateTaskFields}
        onUpdateTaskStatus={updateTaskStatus}
      />
    </div>
  );
};

export default App;
