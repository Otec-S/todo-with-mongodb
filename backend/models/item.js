const mongoose = require("mongoose");

// Определение схемы для задачи (Todo)
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["выполнено", "в процессе", "ожидает выполнения"],
      default: "ожидает выполнения",
    },
  },
  { versionKey: false }
);

// Создание модели для задачи
const Todo = mongoose.model("Todo", todoSchema);

// Экспорт модели
module.exports = Todo;
