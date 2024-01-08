import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onDeleteTask, onUpdateTaskStatus, onUpdateTaskText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [selectedStatus, setSelectedStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    onUpdateTaskStatus(task.id, e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onUpdateTaskText(task.id, editedText, editedDescription);
  };

  const handleTaskClick = () => {
    // Добавьте здесь логику, если необходимо выполнить какие-то действия при клике на задачу
  };

  return (
    <div onClick={handleTaskClick}>
      <label>
        {isEditing ? (
          <>
            <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
            <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
            <button onClick={handleSaveClick}>Сохранить</button>
          </>
        ) : (
          <>
            {task.title} - {task.description}
            <select value={selectedStatus} onChange={handleStatusChange}>
              <option value="в процессе">в процессе</option>
              <option value="ожидает выполнения">ожидает выполнения</option>
            </select>
            <button onClick={handleEditClick}>
              {isEditing ? 'Отменить' : 'Редактировать задачу'}
            </button>
          </>
        )}
      </label>
    </div>
  );
};

export default Task;
