import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({
  tasks,
  onDeleteTask,
  onUpdateTaskStatus,
  onUpdateTaskTitle,
  onUpdateTaskDescription,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTaskStatus={onUpdateTaskStatus}
          onUpdateTaskTitle={onUpdateTaskTitle}
          onUpdateTaskDescription={onUpdateTaskDescription}
        />
      ))}
    </div>
  );
};

export default TaskList;
