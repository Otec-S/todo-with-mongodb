import React, { useState } from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import AddForm from "../AddForm/AddForm";
import "./App.css";

const App = () => {
  //стейт с массивом всех заданий
  const [tasks, setTasks] = useState([]);

  console.log("tasks:", tasks);

  //добавление нового задания в массив заданий
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  //пробегаем фильтром по всему массиву заданий
  //оставляем после фильтра только задания, id которых не равен принятому в функцию id
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  //пробегаем мапом по всему массиву заданий
  //если id полученного функцией задания равен какому-то из массива заданий, обновляем статус задания полученным в функцию статусом с этим id. иначе оставляем без изменений
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  //пробегаем мапом по всему массиву заданий
  //одновление заголовка задания
  const updateTaskTitle = (taskId, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  //пробегаем мапом по всему массиву заданий
  //одновление описания задания
  const updateTaskDescription = (taskId, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <AddForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTaskStatus={updateTaskStatus}
        onUpdateTaskTitle={updateTaskTitle}
        onUpdateTaskDescription={updateTaskDescription}
      />
    </div>
  );
};

export default App;
