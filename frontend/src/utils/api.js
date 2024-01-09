import API_URL from "./constants.js";

//получение массива заданий
export const getAllTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/todos`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

//создание нового задания
//передаем объект
export const createTodo = async (todoData) => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

//обновление задачи
//todoData - это объект вероятно
export const updateTodo = async (id, todoData) => {
  try {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

//удаляем задачу
export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
