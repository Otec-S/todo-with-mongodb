const express = require("express");
const router = express.Router();
const Todo = require("../models/item");

// Эндпоинт для получения списка всех задач
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Эндпоинт для создания новой задачи
router.post("/todos", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Эндпоинт для обновления задачи
router.put("/todos/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      },
      { new: true }
    );

    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Эндпоинт для удаления задачи
router.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Задача не найдена" });
    }

    res.json({ message: "Задача удалена", deletedTodo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
