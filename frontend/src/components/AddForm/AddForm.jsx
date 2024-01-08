// AddForm.js
import React, { useState } from 'react';

const AddForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('ожидает выполнения');

  const handleAddTask = () => {
    if (!title) {
      alert('Пожалуйста, введите заголовок задачи');
      return;
    }

    const newTask = {
      id: Date.now(), // Используйте уникальный идентификатор, например, с помощью Date.now()
      title,
      description,
      status,
    };

    onAddTask(newTask);

    setTitle('');
    setDescription('');
    setStatus('ожидает выполнения');
  };

  return (
    <div>
      <h2>Добавить задачу</h2>
      <form>
        <label>
          Заголовок:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Описание:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Статус:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="выполнено">выполнено</option>
            <option value="в процессе">в процессе</option>
            <option value="ожидает выполнения">ожидает выполнения</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleAddTask}>
          Добавить задачу
        </button>
      </form>
    </div>
  );
};

export default AddForm;
