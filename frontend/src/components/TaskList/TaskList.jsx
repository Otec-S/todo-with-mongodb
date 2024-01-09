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
        <section>
          <h2>Текущие задачи</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task._id}>
                <Task
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onUpdateTaskFields={onUpdateTaskFields}
                  onUpdateTaskStatus={onUpdateTaskStatus}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default TaskList;
