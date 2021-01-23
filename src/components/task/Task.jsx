import React from "react";
import taskStyle from "./taskStyle.module.css";

const Task = ({ task, dateAndTime, reminder, deleteTask }) => {
  let color = reminder ? "cyan" : "tomato";
  return (
    <div style={{ background: color }} className={taskStyle.task}>
      <div className={taskStyle.leftColumn}>
        <p>{task}</p>
        <p>{dateAndTime}</p>
      </div>
      <div className={taskStyle.rightColumn} onClick={() => deleteTask(task)}>
        <span className={taskStyle.delete}>X</span>
      </div>
    </div>
  );
};

export default Task;
