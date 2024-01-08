import React, { useState } from 'react';

const Task = ({ task, onDeleteTask, onUpdateTaskStatus, onUpdateTaskText }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);
  const [selectedStatus, setSelectedStatus] = useState(task.status);

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setIsChecked(true);
      setTimeout(() => {
        onDeleteTask(task.id);
      }, 1000);
    }
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    onUpdateTaskStatus(task.id, newStatus);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onUpdateTaskText(task.id, editedText);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <div style={{ marginLeft: '8px' }}>
          {isChecked ? (
            <span>✔ {task.title}</span>
          ) : isEditing ? (
            <>
              <input type="text" value={editedText} onChange={handleTextChange} />
              <button onClick={handleSaveClick}>Сохранить</button>
            </>
          ) : (
            <>
              <span>{task.title}</span>
              <select value={selectedStatus} onChange={handleStatusChange}>
                <option value="выполнено">выполнено</option>
                <option value="в процессе">в процессе</option>
                <option value="ожидает выполнения">ожидает выполнения</option>
              </select>
              <button onClick={handleEditClick}>Редактировать задачу</button>
            </>
          )}
        </div>
      </label>
    </div>
  );
};

export default Task;
