import React from "react";
import Input from "./Input";
import Button from "../button/Button";
import formStyle from "./form.module.css";

const Form = ({
  task,
  dateAndTime,
  save,
  reminder,
  taskValue,
  dateValue,
  emptyValue,
  bool,
}) => {
  return (
    <div className={formStyle.form}>
      <Input
        placeholder="add task"
        legend="Task"
        type="text"
        task={task}
        value={taskValue}
      ></Input>
      {emptyValue && <p className={formStyle.error}>fields cannot be empty</p>}
      <Input
        placeholder="add day and time"
        legend="day and time"
        type="text"
        dateAndTime={dateAndTime}
        value={dateValue}
      ></Input>
      {emptyValue && <p className={formStyle.error}>fields cannot be empty</p>}
      <Input
        type="checkbox"
        legend="Set Reminder"
        bool={bool}
        reminder={reminder}
      ></Input>
      <Button what="save" event={save}>
        Save Task
      </Button>
    </div>
  );
};

export default Form;
