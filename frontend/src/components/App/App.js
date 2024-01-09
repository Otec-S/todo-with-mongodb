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
  console.log("tasks:", tasks);

  //ПОЛУЧЕНИЕ массива заданий с бэка
  //получение списка задач с бэка
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
  // const addTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };

  const addTask = async (newTask) => {
    try {
      const newTodo = await createTodo(newTask);
      // console.log('newTodo:', newTodo)
      setTasks([...tasks, newTodo]);
    } catch (error) {
      console.error(error);
    }
  };

  //удаление задания из массива
  //пробегаем фильтром по всему массиву заданий
  //оставляем после фильтра только задания, id которых не равен принятому в функцию id
  // const deleteTask = (taskId) => {
  //   setTasks(tasks.filter((task) => task.id !== taskId));
  // };
  // const deleteTask = async (taskId) => {
  //   try {
  //     const deletedTodo = await deleteTodo(taskId);
  //     setTasks(tasks.filter((task) => task._id !== deletedTodo._id));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const deleteTask = async (taskId) => {
    try {
      await deleteTodo(taskId);
      // Обновляем стейт, исключая удаленное задание
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error(error);
    }
  };

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

  //обновление задания в массиве
  //пробегаем мапом по всему массиву заданий
  //если id полученного функцией задания равен какому-то из массива заданий, обновляем статус задания полученным в функцию статусом с этим id. иначе оставляем без изменений
  // const updateTaskStatus = (taskId, newStatus) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === taskId ? { ...task, status: newStatus } : task
  //     )
  //   );
  // };

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

  //пробегаем мапом по всему массиву заданий
  //одновление заголовка задания
  // const updateTaskTitle = (taskId, newTitle) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === taskId ? { ...task, title: newTitle } : task
  //     )
  //   );
  // };

  //пробегаем мапом по всему массиву заданий
  //одновление описания задания
  // const updateTaskDescription = (taskId, newDescription) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === taskId ? { ...task, description: newDescription } : task
  //     )
  //   );
  // };

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
        // onUpdateTaskTitle={updateTaskTitle}
        // onUpdateTaskDescription={updateTaskDescription}
      />
    </div>
  );
};

export default App;
