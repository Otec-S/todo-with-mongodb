import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({
  tasks,
  onDeleteTask,
  onUpdateTaskStatus,
  onUpdateTaskFields,
}) => {
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
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TaskList;
