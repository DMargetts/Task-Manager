import React from "react";
import buttonStyle from "./buttonStyle.module.css";

const Button = ({ children, what, event, formOpen }) => {
  let color = formOpen
    ? buttonStyle.closeTaskButton
    : buttonStyle.addTaskButton;
  return (
    <div>
      <button
        className={what === "save" ? buttonStyle.saveTaskButton : color}
        onClick={event}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
