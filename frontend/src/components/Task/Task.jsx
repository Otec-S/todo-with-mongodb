import React, { useState } from "react";
import "./Task.css";

const Task = ({ task, onDeleteTask, onUpdateTaskStatus, onUpdateTaskDescription, onUpdateTaskTitle }) => {
  //стейт булева состояния редактирования текста
  const [isEditing, setIsEditing] = useState(false);
  //стейт состояние редактирования заголовка
  //??????? вероятно следует заменить на title
  const [editedTitle, setEditedTitle] = useState(task.title);
  //стейт состояние редактирования описания
  const [editedDescription, setEditedDescription] = useState(task.description);
  //стейт состояние выбора статуса
  const [selectedStatus, setSelectedStatus] = useState(task.status);


  //функция устанавливает значения выбранного поля в стейт статуса и обновляет статус и вызывает функцию обновления статуса глобально
  //????????? возможно тут задвоение функционала
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    onUpdateTaskStatus(task.id, e.target.value);
  };

  //по клику на кнопку Редактировать меняется булев статус isEditing на true
  const handleEditClick = () => {
    setIsEditing(true);
  };

  //клик по кнопке Сохранить меняет булев статус isEditing на false
  const handleSaveClick = () => {
    setIsEditing(false);
    //функции обновляют глобальные стейты заголовка и описания
    onUpdateTaskTitle(task.id, editedTitle);
    onUpdateTaskDescription(task.id, editedDescription);
  };


  return (
    <div>
      <label>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              // обновляем местные стейты
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button onClick={handleSaveClick}>Сохранить</button>
          </>
        ) : (
          <>
            {task.title}: {task.description}
            <select value={selectedStatus} onChange={handleStatusChange}>
              <option value="в процессе">в процессе</option>
              <option value="ожидает выполнения">ожидает выполнения</option>
            </select>
            <button onClick={handleEditClick}>
              Редактировать задачу
            </button>
          </>
        )}
      </label>
    </div>
  );
};

export default Task;
