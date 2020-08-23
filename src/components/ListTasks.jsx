import React from "react";

const ListTasks = (props) => {
  const handleClick = (clickEvent) => {
    const target = clickEvent.target;
    props.updateCompleted(target.id);
  };

  return (
    <ul>
      {props.tasks.map((task, i) => {
        return (
          <li key={`${i} task index`}>
            <p onClick={handleClick} className={task.completed ? 'completed' : 'notCompleted'} id={i}>{task.task}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ListTasks;
