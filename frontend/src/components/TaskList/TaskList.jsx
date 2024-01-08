import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';


const TaskList = ({ tasks, onDeleteTask, onUpdateTaskStatus, onUpdateTaskText }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTaskStatus={onUpdateTaskStatus}
          onUpdateTaskText={onUpdateTaskText}
        />
      ))}
    </div>
  );
};

export default TaskList;
