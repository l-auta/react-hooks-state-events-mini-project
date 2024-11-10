import React from "react";
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="tasks">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
          />
      ))}
    </ul>
  );
}

export default TaskList;
