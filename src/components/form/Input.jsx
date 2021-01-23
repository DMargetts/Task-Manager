import React from "react";
import inputStyle from "./input.module.css";

const Input = ({
  placeholder,
  legend,
  type,
  task,
  dateAndTime,
  reminder,
  value,
  bool,
}) => {
  let style = type === "text" ? inputStyle.text : inputStyle.reminder;
  let get = legend === "Task" ? task : dateAndTime;

  if (type === "text") {
    return (
      <div className={style}>
        <legend>{legend}</legend>
        <input
          type={type}
          placeholder={placeholder}
          className={style}
          onChange={(e) => get(e)}
          value={value}
        ></input>
      </div>
    );
  } else {
    return (
      <div className={style}>
        <legend>{legend}</legend>
        <input
          type={type}
          checked={bool}
          className={style}
          onChange={(e) => reminder(e.currentTarget.checked)}
        ></input>
      </div>
    );
  }
};

export default Input;
