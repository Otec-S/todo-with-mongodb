import React, { useState } from "react";
import "./AddForm.css";

const AddForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("ожидает выполнения");

  const handleAddTask = () => {
    if (!title) {
      alert("Пожалуйста, введите заголовок задачи");
      return;
    }

    if (!description) {
      alert("Пожалуйста, введите описание задачи");
      return;
    }

    //создаем объект с новым заданием
    const newTask = {
      id: Date.now(), // уникальный идентификатор
      title,
      description,
      status,
    };

    //добавляем новое задание в массив tasks
    onAddTask(newTask);

    //очищаем поля формы после добавления нового задания
    setTitle("");
    setDescription("");
    setStatus("ожидает выполнения");
  };

  return (
    <div>
      <h2>Добавить задачу</h2>
      <form className="form-container">
        <label>
          Заголовок:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Описание:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Статус:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
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
