import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import { getAllTodos, deleteTodo, updateTodo } from "../../utils/api";
import "./TaskList.css";

const TaskList = ({
  tasks,
  setTasks,
  onDeleteTask,
  onUpdateTaskStatus,
  // onUpdateTaskTitle,
  onUpdateTaskDescription,
  onUpdateTaskFields
}) => {

  // //получение списка задач с бэка
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const todos = await getAllTodos();
  //       setTasks(todos);
  //     } catch (error) {
  //       console.error("Error fetching todos:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //удаление задачи
  // const onDeleteTask = async (taskId) => {
  //   try {
  //     await deleteTodo(taskId);
  //     setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  //   } catch (error) {
  //     console.error("Error deleting todo:", error);
  //   }
  // };

  //обновление статуса задачи
  // const onUpdateTaskStatus = async (taskId, newStatus) => {
  //   try {
  //     const updatedTodo = await updateTodo(taskId, { status: newStatus });
  //     setTasks((prevTasks) =>
  //       prevTasks.map((task) =>
  //         task._id === taskId ? { ...task, status: updatedTodo.status } : task
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error updating todo status:", error);
  //   }
  // };

  //обновление полей задачи
  // const onUpdateTask = async (taskId, newTitle, newDescription, newStatus) => {
  //   try {
  //     const updatedTodo = await updateTodo(taskId, {
  //       title: newTitle,
  //       description: newDescription,
  //       status: newStatus
  //     });
  //     setTasks((prevTasks) =>
  //       prevTasks.map((task) =>
  //         task._id === taskId
  //           ? { ...task, title: updatedTodo.title,
  //             description: updatedTodo.description,
  //             status: updatedTodo.newStatus
  //            }
  //           : task
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error updating todo text:", error);
  //   }
  // };



  return (
    <div className="task-list">
      {tasks.length > 0 && (
        <>
          <h2>Текущие задачи</h2>
          {tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              onDeleteTask={onDeleteTask}
              onUpdateTaskFields={onUpdateTaskFields}

              onUpdateTaskStatus={onUpdateTaskStatus}
              // onUpdateTaskTitle={onUpdateTaskTitle}
              // onUpdateTaskDescription={onUpdateTaskDescription}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TaskList;
